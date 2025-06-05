<template>
  <!-- Componente de paginação que exibe a página atual e permite navegar entre as páginas -->
  <div class="flex justify-center items-center gap-2 mt-6 sm:flex-row flex-col sm:space-x-2 space-x-0 space-y-2 sm:space-y-0">
    <button
      class="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed sm:w-auto w-full"
      :disabled="currentPage === 1"
      @click="$emit('update:page', currentPage - 1)"
    >
      Anterior
    </button>
    <span class="text-sm text-gray-600 sm:w-auto w-full text-center">Página {{ currentPage }} de {{ totalPages }}</span>
    <button
      class="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed sm:w-auto w-full"
      :disabled="currentPage === totalPages"
      @click="$emit('update:page', currentPage + 1)"
    >
      Próxima
    </button>
  </div>
</template>

<script setup>
/**
 * Componente de paginação que exibe a página atual e permite navegar entre as páginas
 * Ele recebe como propriedade a página atual e o total de páginas e emite um evento quando o usuário clica em uma página
 * Ele é usado na página de produtos para permitir que o usuário navegue entre as páginas de produtos
 */

defineProps({
  currentPage: Number,
  totalPages: Number,
});
defineEmits(['update:page']);
</script>

