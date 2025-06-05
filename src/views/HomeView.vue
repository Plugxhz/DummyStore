<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <div class="container mx-auto flex flex-col lg:flex-row gap-6">
      <CategoryMenu class="w-full lg:w-1/5" />
      <div class="flex-1">
        <div class="flex flex-wrap md:flex-nowrap justify-between items-start md:items-center gap-4 mb-6">
          <div class="relative flex-1 md:w-1/2">
            <input
              :value="searchTerm"
              @input="onSearchInput"
              type="text"
              placeholder="Buscar produtos..."
              class="w-full px-4 py-2 border rounded shadow-sm focus:outline-none"
            />
          </div>
          <div class="flex gap-2 md:w-1/2 justify-end flex-wrap">
            <button
              v-for="option in sortOptions"
              :key="option.value"
              type="button"
              :class="[
                'flex items-center gap-1 px-3 py-2 rounded-full text-sm border shadow-sm transition whitespace-nowrap',
                sortOption === option.value
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
              ]"
              @click="setSort(option.value)"
            >
              <span>{{ option.icon }}</span>
              <span>{{ option.label }}</span>
            </button>
          </div>
        </div>

        <div v-if="loading" class="text-center text-gray-500">Carregando produtos...</div>
        <div v-else-if="error" class="text-red-500">{{ error }}</div>
        <div v-else>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <ProductCard
              v-for="product in products"
              :key="product.id"
              :product="product"
            />
          </div>
          <div class="flex justify-center items-center gap-4 mt-6">
            <button
              @click="goToPage(currentPage - 1)"
              :disabled="currentPage === 1"
              class="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
            >
              Anterior
            </button>
            <span class="text-sm font-medium text-gray-700">{{ currentPage }} de {{ totalPages() }}</span>
            <button
              @click="goToPage(currentPage + 1)"
              :disabled="currentPage === totalPages()"
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
import { ref, onMounted } from 'vue';
import axios from 'axios';
import ProductCard from '@/components/ProductCard.vue';
import CategoryMenu from '@/components/CategoriesMenu.vue';

// Armazena os produtos, total de itens, loading e erro
const products = ref([]);
const totalItems = ref(0);
const loading = ref(false);
const error = ref(null);

// Armazena o termo de busca, opção de ordenação e página atual
const searchTerm = ref('');
const sortOption = ref('');
const currentPage = ref(1);
const itemsPerPage = 12;

// Opções de ordenação
const sortOptions = [
  { value: '', label: 'Sem ordenação', icon: '❌' },
  { value: 'price_asc', label: 'Preço ↑', icon: '⬆️' },
  { value: 'price_desc', label: 'Preço ↓', icon: '⬇️' },
  { value: 'name_asc', label: 'A → Z', icon: '🔤' },
  { value: 'name_desc', label: 'Z → A', icon: '🔡' }
];

// Função para parsear a opção de ordenação
const parseSort = (value) => {
  switch (value) {
    case 'price_asc': return { sortBy: 'price', order: 'asc' };
    case 'price_desc': return { sortBy: 'price', order: 'desc' };
    case 'name_asc': return { sortBy: 'title', order: 'asc' };
    case 'name_desc': return { sortBy: 'title', order: 'desc' };
    default: return {};
  }
};

// Fetch para buscar os produtos
const fetchProducts = async () => {
  loading.value = true;
  error.value = null;

  // calcula o skip para a página atual
  const skip = (currentPage.value - 1) * itemsPerPage;
  const { sortBy, order } = parseSort(sortOption.value);
  const isSearching = !!searchTerm.value;
  const baseURL = isSearching
    ? 'https://dummyjson.com/products/search'
    : 'https://dummyjson.com/products';

  try {
    // Faz a requisição para a API
    const res = await axios.get(baseURL, {
      params: {
        q: isSearching ? searchTerm.value : undefined,
        limit: itemsPerPage,
        skip,
      },
    });

    // Ordena os produtos se a opção de ordenação for diferente de vazia
    let fetchedProducts = res.data.products;

    if (sortBy && order) {
      fetchedProducts = fetchedProducts.sort((a, b) => {
        const valA = a[sortBy];
        const valB = b[sortBy];

        if (typeof valA === 'string') {
          return order === 'asc'
            ? valA.localeCompare(valB)
            : valB.localeCompare(valA);
        }

        return order === 'asc' ? valA - valB : valB - valA;
      });
    }

    // Armazena os produtos e total de itens
    products.value = fetchedProducts;
    totalItems.value = res.data.total;
  } catch (err) {
    // mostra erro se acontecer
    error.value = 'Erro ao carregar produtos.';
    console.error(err);
  } finally {
    // remove loading
    loading.value = false;
  }
};

// Calcula o total de páginas
const totalPages = () => Math.ceil(totalItems.value / itemsPerPage);

// Função de busca
const onSearchInput = (event) => {
  searchTerm.value = event.target.value;
  currentPage.value = 1;
  fetchProducts();
};

// Função de ordenação dos pordutos com base na seleção
const setSort = (value) => {
  sortOption.value = value;
  currentPage.value = 1;
  fetchProducts();
};

// Paginamento
const goToPage = (page) => {
  if (page < 1 || page > totalPages()) return;
  currentPage.value = page;
  fetchProducts();
};

// Busca os produtos ao fim do carregamento
onMounted(() => {
  fetchProducts();
});
</script>
