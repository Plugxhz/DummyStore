<template>
  <!-- Barra de pesquisa que emite um evento de busca quando o valor muda -->
  <input
    type="text"
    v-model="query"
    @input="() => $emit('search', query)"
    aria-label="Buscar produtos"
    placeholder="Buscar produtos..."
    class="w-full sm:w-auto px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
</template>

<script setup>
// Componente de barra de pesquisa que emite um evento de busca quando o valor muda
// Ele é usado na página inicial para buscar produtos
import { ref } from 'vue'
const query = ref('')
</script>

