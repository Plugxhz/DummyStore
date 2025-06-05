<template>
    <!-- Tela de listagem de categorias, onde é apresentado um grid com links para as categorias -->
    <div class="min-h-screen bg-gray-50 text-gray-800">
      <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold mb-6 md:text-4xl md:mb-8">Categorias</h1>
  
        <div v-if="loading" class="text-center py-8 md:py-10">Carregando categorias...</div>
        <div v-else-if="error" class="text-red-500 text-center py-8 md:py-10">{{ error }}</div>
  
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          <router-link
            v-for="category in categories"
            :key="category"
            :to="`/category/${category}`"
            class="bg-white p-4 rounded-xl shadow hover:shadow-md transition-all text-center capitalize text-blue-600 hover:text-blue-800 font-semibold"
          >
            {{ category }}
          </router-link>
        </div>
      </div>
    </div>
</template>
  
<script setup>
    // Componente que lista as categorias, ele busca as categorias na API e as lista em um grid
    // A lista de categorias é armazenada na variável categories e é utilizada para criar os links
    // para as categorias
    import { ref, onMounted } from 'vue';
    import api from '@/services/api';
  
    const categories = ref([]);
    const loading = ref(true);
    const error = ref(null);
  
    onMounted(async () => {
      try {
        const { data } = await api.get('/products/categories');
        categories.value = data;
      } catch (err) {
        error.value = 'Erro ao carregar categorias.';
        console.error(err);
      } finally {
        loading.value = false;
      }
    });
</script>

