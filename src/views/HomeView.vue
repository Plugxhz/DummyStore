<template>
  <!-- Estrutura da interface que exibe produtos com funcionalidade de busca, ordenação e paginação -->
  <div class="min-h-screen bg-gray-100 p-4">
    <div class="container mx-auto flex flex-col lg:flex-row gap-6">
      <CategoryMenu class="w-full lg:w-1/5" />
      <div class="flex-1">
        <div class="flex flex-wrap md:flex-nowrap justify-between items-start md:items-center gap-4 mb-6">
          <div class="relative flex-1 md:w-1/2">
            <input
              v-model="searchTerm"
              type="text"
              placeholder="Buscar produtos..."
              class="w-full px-4 py-2 border rounded shadow-sm focus:outline-none"
            />
          </div>
          <div class="flex gap-2 md:w-1/2 justify-end">
            <button
              v-for="option in sortOptions"
              :key="option.value"
              type="button"
              v-html="option.icon + ' ' + option.label"
              :class="[
                'flex items-center gap-1 px-3 py-2 rounded-full text-sm border shadow-sm transition whitespace-nowrap',
                sortOption === option.value
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
              ]"
              @click="setSort(option.value)"
            />
          </div>
        </div>
        <div v-if="loading" class="text-center text-gray-500">Carregando produtos...</div>
        <div v-else-if="error" class="text-red-500">{{ error }}</div>
        <div v-else>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <ProductCard
              v-for="product in paginatedProducts"
              :key="product.id"
              :product="product"
            />
          </div>
          <div class="flex justify-center items-center gap-4 mt-6">
            <button
              @click="currentPage--"
              :disabled="currentPage === 1"
              class="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
            >
              Anterior
            </button>
            <span class="text-sm font-medium text-gray-700">{{ currentPage }} de {{ totalPages }}</span>
            <button
              @click="currentPage++"
              :disabled="currentPage === totalPages"
              class="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
            >
              Próximo
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/* Lógica do componente para gerenciar produtos, incluindo busca, ordenação e paginação */
import { ref, computed, watch, onMounted } from 'vue';
import axios from 'axios';
import ProductCard from '@/components/ProductCard.vue';
import CategoryMenu from '@/components/CategoriesMenu.vue';

const products = ref([]);
const totalItems = ref(0);
const loading = ref(false);
const error = ref(null);
const searchTerm = ref('');
const sortOption = ref('');
const currentPage = ref(1);
const itemsPerPage = 12;

const sortOptions = [
  { value: '', label: 'Sem ordenação', icon: '❌' },
  { value: 'price_asc', label: 'Preço ↑', icon: '⬆️' },
  { value: 'price_desc', label: 'Preço ↓', icon: '⬇️' },
  { value: 'name_asc', label: 'A → Z', icon: '🔤' },
  { value: 'name_desc', label: 'Z → A', icon: '🔡' }
];

const parseSort = (value) => {
  switch (value) {
    case 'price_asc': return { sortBy: 'price', order: 'asc' };
    case 'price_desc': return { sortBy: 'price', order: 'desc' };
    case 'name_asc': return { sortBy: 'title', order: 'asc' };
    case 'name_desc': return { sortBy: 'title', order: 'desc' };
    default: return {};
  }
};

const fetch = async () => {
  loading.value = true;
  error.value = null;

  const skip = (currentPage.value - 1) * itemsPerPage;
  const { sortBy, order } = parseSort(sortOption.value);
  const isSearching = !!searchTerm.value;
  const baseURL = isSearching
    ? 'https://dummyjson.com/products/search'
    : 'https://dummyjson.com/products';

  try {
    const res = await axios.get(baseURL, {
      params: {
        q: isSearching ? searchTerm.value : undefined,
        limit: itemsPerPage,
        skip,
        ...(sortBy ? { sortBy, order } : {}),
      },
    });

    products.value = res.data.products;
    totalItems.value = res.data.total;
  } catch (err) {
    error.value = 'Erro ao carregar produtos.';
    console.error(err);
  } finally {
    loading.value = false;
  }
};

const setSort = (value) => {
  sortOption.value = value;
  currentPage.value = 1;
};

const paginatedProducts = computed(() => products.value);
const totalPages = computed(() => Math.ceil(totalItems.value / itemsPerPage));

watch([currentPage, searchTerm, sortOption], () => {
  fetch();
});

onMounted(fetch);
</script>

