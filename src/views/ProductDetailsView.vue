<template>
  <!-- Tela que mostra os detalhes de um produto -->
  <!-- Recebe o id do produto pela rota e busca os dados do produto na API -->
  <!-- Mostra as informações do produto, como título, marca, categoria, avaliação, estoque e descrição -->
  <!-- Mostra o preço do produto e um link para voltar à loja -->
  <!-- Se o produto não for encontrado, mostra uma mensagem de erro -->
  <div class="max-w-7xl mx-auto p-6 sm:p-8 lg:p-12 bg-gray-100 min-h-screen">
    <div v-if="product" class="bg-white p-6 rounded-xl shadow-md grid md:grid-cols-2 gap-8 items-start md:max-w-3xl lg:max-w-5xl mx-auto">
      <div class="relative">
        <img
          @click="showProductImage"
          :src="product.thumbnail"
          :alt="product.title"
          class="w-full rounded-xl shadow object-contain cursor-pointer"
        />
        <div
          v-show="showImage"
          class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
          @click="showImage = false"
        >
          <img
            :src="product.thumbnail"
            :alt="product.title"
            class="max-w-full max-h-full"
          />
        </div>
      </div>
      <div class="space-y-6">
        <h1 class="text-3xl font-bold mb-2">{{ product.title }}</h1>
        <p class="text-gray-600 text-sm mb-1">
          Marca: <span class="font-medium">{{ product.brand }}</span>
        </p>
        <p class="text-gray-600 text-sm mb-1">
          Categoria: <span class="font-medium">{{ product.category }}</span>
        </p>
        <p class="text-gray-600 text-sm mb-1">
          Avaliação: <span class="font-medium">{{ product.rating }}</span>
        </p>
        <p class="text-gray-600 text-sm mb-4">
          Estoque:
          <span
            :class="product.stock > 0 ? 'text-green-600' : 'text-red-600'"
          >
            {{ product.stock > 0 ? `Disponível (${product.stock} unidades)` : 'Indisponível' }}
          </span>
        </p>
        <p class="text-gray-800 text-lg mb-4">{{ product.description }}</p>
        <p class="text-green-700 text-2xl font-semibold mb-6">${{ product.price.toFixed(2) }}</p>
        <div class="mt-4 flex flex-col sm:flex-row gap-4">
          <router-link
            to="/"
            class="text-sm text-blue-600 hover:underline flex items-center gap-2 bg-white py-2 px-4 rounded-lg shadow-md transition-all hover:bg-blue-50"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
            Voltar à loja
          </router-link>
        </div>
      </div>
    </div>
    <div v-else class="text-center py-10 text-gray-500">Carregando produto...</div>
  </div>
</template>

<script setup>
/* eslint-disable max-len */
/*
 * Script que busca os detalhes de um produto na API e os armazena na variável `product`
 * Quando o componente é montado, chama a função `fetchProduct` que busca os dados do produto
 * na API e os armazena na variável `product`
 * Se o produto não for encontrado, mostra uma mensagem de erro
 */
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import api from '@/services/api'

const route = useRoute()

const product = ref(null)
const showImage = ref(false)

const fetchProduct = async () => {
  try {
    const { data } = await api.get(`/products/${route.params.id}`)
    product.value = data
  } catch (err) {
    console.error('Erro ao buscar detalhes do produto:', err)
  }
}

function showProductImage() {
  showImage.value = true
}

onMounted(fetchProduct)
</script>

