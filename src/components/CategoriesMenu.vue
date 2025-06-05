<template>
  <!-- Componente de menu de categorias que exibe todas as categorias em uma lista e permite filtrar por categoria -->
  <aside class="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 lg:w-64">
    <h2 class="text-xl font-bold text-gray-800 mb-4">Categorias</h2>
    <button
      class="flex items-center justify-between w-full px-4 py-2 rounded-lg bg-gray-50 hover:bg-blue-100 text-gray-700 font-medium capitalize transition duration-200"
      @click="isMenuOpen = !isMenuOpen"
    >
      <span class="lg:w-40 truncate">Todas</span>
      <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" stroke-width="2"
        viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 18l6-6-6-6"/>
      </svg>
    </button>
    <ul v-show="isMenuOpen" class="space-y-2 mt-2">
      <li>
        <router-link
          to="/"
          class="flex items-center justify-between w-full px-4 py-2 rounded-lg bg-red-100 hover:bg-red-200 text-red-700 font-medium capitalize transition duration-200"
        >
          Remover Filtros
        </router-link>
      </li>
      <li
        v-for="category in categories"
        :key="category.slug"
      >
        <router-link
          :to="`/category/${encodeURIComponent(category.slug)}`"
          class="flex items-center justify-between px-4 py-2 rounded-lg bg-gray-50 hover:bg-blue-100 text-gray-700 font-medium capitalize transition duration-200"
        >
          <span class="lg:w-40 truncate">{{ category.name }}</span>
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script setup>
/**
 * Componente que lista todas as categorias em uma lista e permite filtrar por categoria
 * Ele tem um botão que abre e fecha a lista de categorias
 * Cada categoria tem um link que redireciona para a página de produtos daquela categoria
 * O componente usa o hook `onMounted` para buscar as categorias assim que ele é renderizado
 */
import { ref, onMounted } from 'vue';
import { getCategories } from '@/services/api.js';

const categories = ref([]);
const isMenuOpen = ref(true);

onMounted(async () => {
  try {
    categories.value = await getCategories();
  } catch (err) {
    console.error('Erro ao buscar categorias:', err);
  }
});
</script>