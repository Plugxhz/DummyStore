<template>
  <!-- Componente que lista os produtos em uma grade de produtos -->
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      class="md:w-1/2 lg:w-1/3 xl:w-1/4"
    />
  </div>
</template>

<script setup>
// Componente que lista os produtos em uma grade de produtos
// Ele recebe uma lista de produtos como propriedade e os lista em uma grade com 1 coluna em telas pequenas, 2 em telas médias, 3 em telas grandes e 4 em telas muito grandes
import ProductCard from './ProductCard.vue';
defineProps({ products: Array });
</script>

