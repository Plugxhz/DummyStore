<template>
  <!-- Componente de produto que exibe as informações do produto -->
  <!-- Recebe como propriedade o objeto do produto e exibe suas informações -->
  <!-- Possui um link para a página de detalhes do produto -->
  <div class="bg-white rounded-xl shadow hover:shadow-lg transition-all p-4 flex flex-col justify-between">
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
</template>

<script setup>
// Componente de produto que exibe as informações do produto
// Recebe como propriedade o objeto do produto e exibe suas informações
// Possui um link para a página de detalhes do produto
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});
</script>

