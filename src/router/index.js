import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import CategoriesView from '@/views/CategoriesView.vue'; // mostra produtos da categoria
import CategoriesListView from '@/views/CategoriesListView.vue'; // lista todas as categorias
import AboutView from '@/views/AboutView.vue';
import ProductDetailsView from '@/views/ProductDetailsView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/product/:id', component: ProductDetailsView },
  { path: '/categories', component: CategoriesListView }, // LISTA de categorias
  { path: '/category/:category', component: CategoriesView }, // PRODUTOS da categoria
  { path: '/about', component: AboutView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
