/**
 *  - getCategories: retorna as categorias de produtos
 *  - getProductsByCategory: retorna os produtos de uma categoria
 *  - getProductById: retorna um produto por id
 *  - getAllProducts: retorna todos os produtos, com opção de limitar e pular produtos
 */

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dummyjson.com',
});

export default api;

export async function getCategories() {
  const res = await api.get('/products/categories');
  return res.data;
}

export async function getProductsByCategory(category) {
  const res = await api.get(`/products/category/${category}`);
  return res.data;
}

export async function getProductById(id) {
  const res = await api.get(`/products/${id}`);
  return res.data;
}

export async function getAllProducts(limit = 20, skip = 0) {
  const res = await api.get(`/products?limit=${limit}&skip=${skip}`);
  return res.data;
}
