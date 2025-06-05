<template>
  <div class="min-h-screen bg-gray-100 py-10 px-4">
    <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
      <h1 class="text-3xl font-bold text-gray-800 mb-6">Sobre o Projeto</h1>

      <p class="text-gray-700 leading-relaxed text-lg mb-4">
        Este projeto é um catálogo de e-commerce fictício desenvolvido como parte de um estudo prático de frontend moderno aplicado pelo professor Valdir durante o curso de Análise e Desenvolvimento de Sistemas.
        Ele utiliza a <a href="https://dummyjson.com/docs" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">API DummyJSON</a> para fornecer produtos e categorias simuladas.
      </p>

      <p class="text-gray-700 leading-relaxed text-lg mb-4">
        A aplicação foi construída com as seguintes tecnologias:
      </p>

      <ul class="list-disc list-inside text-gray-700 mb-6 text-lg space-y-1">
        <li><strong class="text-gray-800">Vue 3</strong> – Framework progressivo para construção de interfaces.</li>
        <li><strong class="text-gray-800">Vite</strong> – Ferramenta de build ultrarrápida para desenvolvimento moderno.</li>
        <li><strong class="text-gray-800">TailwindCSS (CDN)</strong> – Utilitário CSS para estilização rápida e responsiva.</li>
        <li><strong class="text-gray-800">Vue Router</strong> – Navegação entre páginas com rotas dinâmicas.</li>
        <li><strong class="text-gray-800">Axios</strong> – Biblioteca HTTP para interação com APIs.</li>
      </ul>

      <p class="text-gray-700 leading-relaxed text-lg">
        O foco principal do projeto é proporcionar uma experiência realista de navegação por produtos, com funcionalidades como
        <strong class="text-blue-600">busca</strong>, <strong class="text-blue-600">filtro por categorias</strong>,
        <strong class="text-blue-600">ordenação</strong> e <strong class="text-blue-600">paginação</strong>.
      </p>
    </div>
  </div>
</template>
