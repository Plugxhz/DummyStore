# 🛒 Dummy Commerce

Catálogo de e-commerce desenvolvido como trabalho acadêmico utilizando a API [DummyJSON](https://dummyjson.com/). A aplicação exibe produtos com funcionalidades de listagem, categorias, busca, paginação e ordenação. Criado com Vue 3, Vite, TailwindCSS e Axios.

## 🎯 Objetivo

Construir uma aplicação front-end interativa e bem estruturada, que consome uma API pública para simular um catálogo de loja online. O foco está em aplicar boas práticas de desenvolvimento com Vue.js 3 e bibliotecas modernas.

---

## ✅ Funcionalidades

- **Listagem de Produtos**: Exibição de produtos com nome, imagem, preço, categoria e estoque, organizados em grid responsivo.
- **Paginação**: Navegação entre diferentes páginas de produtos.
- **Detalhes do Produto**: Página individual com informações detalhadas de cada produto.
- **Categorias**: Menu lateral/superior com filtros por categoria.
- **Busca em Tempo Real**: Campo de busca com atualização instantânea conforme o usuário digita.
- **Ordenação de Produtos**
  - Por preço (crescente/decrescente)
  - Por nome (A-Z / Z-A)

---

## 🧪 Tecnologias Utilizadas

- **Vue.js 3** – Framework JavaScript progressivo
- **Vite** – Bundler leve e rápido
- **Axios** – Cliente HTTP para consumo de API
- **TailwindCSS** – Estilização com utilitários

---

## 🚀 Como Rodar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/dummy-commerce.git
cd dummy-commerce
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

### 4. Build para produção

```bash
npm run build
```

---

## 💡 Estrutura do Projeto

```
src/
├── assets/         # Imagens e arquivos estáticos
├── components/     # Componentes reutilizáveis (Card, Navbar, etc)
├── pages/          # Páginas principais (Home, ProductDetail, etc)
├── services/       # Configuração do Axios e chamadas à API
├── router/         # Definição de rotas
├── App.vue         # Componente principal
└── main.js         # Ponto de entrada da aplicação
```

---

## 📦 API Utilizada

- [DummyJSON](https://dummyjson.com/products): Fornece dados de produtos, categorias, buscas e mais.

---

## 🧑‍🎓 Autor

Trabalho desenvolvido como parte de avaliação acadêmica.  
Feito por: **Enzo Bedendo Sakatauskas** – [@Plugxhz](https://github.com/Plugxhz)
