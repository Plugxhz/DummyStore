<template>
  <!-- Tela que lista os produtos de uma categoria -->
  <div class="min-h-screen bg-gray-100 text-gray-800">
    <div class="container mx-auto px-4 py-8">
      <div class="flex flex-col lg:flex-row gap-6">
        <div class="w-full lg:w-1/4">
          <CategoryMenu />
        </div>
        <div class="w-full lg:w-3/4">
          <div class="flex items-center justify-between mb-6">
            <h1 class="text-2xl font-bold capitalize">
              Categoria: {{ route.params.category }}
            </h1>
            <router-link
              to="/"
              class="text-sm text-blue-600 hover:underline flex items-center gap-2 bg-white py-2 px-4 rounded-lg shadow-md transition-all hover:bg-blue-50"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15 19l-7-7 7-7"></path>
              </svg>
              Voltar à loja
            </router-link>
          </div>
          <div v-if="loading" class="text-center py-8 text-gray-500">Carregando produtos...</div>
          <div v-else-if="error" class="text-red-500 text-center py-8">{{ error }}</div>
          <div v-else class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div
              v-for="product in products"
              :key="product.id"
              class="bg-white rounded-xl shadow hover:shadow-lg transition-all p-4 flex flex-col"
            >
              <img
                :src="product.thumbnail"
                :alt="product.title"
                class="w-full h-48 object-contain mb-4 rounded"
              />
              <h2 class="font-semibold text-lg truncate mb-1">{{ product.title }}</h2>
              <p class="text-green-600 font-bold text-sm mb-1">${{ product.price }}</p>
              <p
                class="text-sm text-center px-2 py-1 rounded-lg bg-green-100 text-green-800 font-semibold mb-2"
              >
                Em estoque
              </p>
              <router-link
                :to="`/product/${product.id}`"
                class="text-sm px-4 py-1 rounded-lg bg-blue-100 text-blue-800 font-semibold hover:bg-blue-200 transition-all mb-2"
              >
                Ver detalhes
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable max-len */
/**
 * Componente que lista os produtos de uma categoria
 * @description
 * Esse componente lista os produtos de uma categoria, ele é chamado quando o usuário clica em uma categoria na tela de categorias.
 * Ele renderiza um menu lateral com as categorias e uma lista de produtos na seção principal.
 * Quando o usuário clica em uma categoria, ele é redirecionado para essa tela com o slug da categoria como parâmetro na rota.
 * O componente usa o hook `useRoute` do Vue Router para acessar o parâmetro da rota e usar como chave para buscar os produtos na API.
 * O componente também usa o hook `onMounted` para buscar os produtos assim que ele é renderizado e o hook `watch` para buscar novamente os produtos quando o parâmetro da rota muda.
 */
/* eslint-enable max-len */

import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { getProductsByCategory } from '@/services/api';
import CategoryMenu from '@/components/CategoriesMenu.vue';

const route = useRoute();
const products = ref([]);
const loading = ref(true);
const error = ref(null);

const fetchProductsByCategory = async (categorySlug) => {
  loading.value = true;
  error.value = null;

  try {
    const res = await getProductsByCategory(categorySlug);
    products.value = res.products;
  } catch (err) {
    error.value = 'Erro ao carregar produtos.';
    console.error(err);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchProductsByCategory(route.params.category);
});

watch(() => route.params.category, (newCategory) => {
  fetchProductsByCategory(newCategory);
});
</script>

