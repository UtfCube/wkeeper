import Vue from 'vue';
import Vuex from 'vuex';

import Api from '@/api';
import axios from 'axios';

Vue.use(Vuex);

const state = {
  // source of data
  products: [],
  currentProduct: {},
  currentImgInfo: {},
};

const actions = {
  // asynchronous operations
  async getProduct(context: any, id: number) {
    try {
      const response = await Api.getProduct(id);
      context.commit('setCurrentProduct', { product: response.data });
      context.commit('setCurrentImageURL', { id: id });
      return null;
    } catch (error) {
      return error.response.data.message;
    }
  },
  async getProducts(context: any) {
    try {
      const response = await Api.getProducts();
      context.commit('setProducts', { products: response.data });
      return null;
    } catch (error) {
      return error.response.data.message;
    }
  },
  async updateImage(context: any, id: number) {
    try {
      var formData = new FormData();
      formData.append('img', context.state.currentImgInfo.image);
      await Api.updateImage(id, formData);
      return await context.dispatch('updateProduct', id);
    } catch (error) {
      return error.response.data.message;
    }
  },
  async updateProduct(context: any, id: number) {
    try {
      await Api.updateProduct(id, context.state.currentProduct);
      context.commit('updateProduct');
      return null;
    } catch (error) {
      return error.response.data.message;
    }
  },
  async createImage(context: any) {
    try {
      var formData = new FormData();
      formData.append('img', context.state.currentImgInfo.image);
      const response = await Api.createImage(formData);
      return await context.dispatch('createProduct', response.data);
    } catch (error) {
      return error.response.data.message;
    }
  },
  async createProduct(context: any, payload: any) {
    try {
      const response = await Api.createProduct(
        state.currentProduct,
        payload.id,
      );
      context.commit('addProduct', response.data);
      return null;
    } catch (error) {
      return error.response.data.message;
    }
  },
  async deleteProduct(context: any, id: number) {
    try {
      await Api.deleteProduct(id);
      context.commit('deleteProduct');
      return null;
    } catch (error) {
      return error.response.data.message;
    }
  },
  async deleteProducts(context: any, products: any[]) {
    try {
      let ids = products.map(({ id }) => id);
      await Api.deleteProducts(ids);
      context.commit('deleteProducts', { products: products });
      return null;
    } catch (error) {
      return error.response.data.message;
    }
  },
};

const mutations = {
  // synchronous operations
  setProducts(state: any, payload: any) {
    state.products = payload.products;
  },
  deleteProduct(state: any) {
    const index = state.products.findIndex(
      (x: any) => x.id === state.currentProduct.id,
    );
    state.products.splice(index, 1);
  },
  deleteProducts(state: any, payload: any) {
    state.products = state.products.filter(
      (x: any) => !payload.products.includes(x),
    );
  },
  updateProduct(state: any) {
    const index = state.products.findIndex(
      (x: any) => x.id === state.currentProduct.id,
    );
    Vue.set(state.products, index, state.currentProduct);
  },
  addProduct(state: any, payload: any) {
    //state.currentProduct = {...state.currentProduct, ...payload };
    state.products.push({ ...state.currentProduct, ...payload });
  },
  setCurrentProduct(state: any, payload: any) {
    if (payload.product.date) {
      payload.product.date = new Date(payload.product.date).toISOString();
    }
    if (payload.product.count) {
      payload.product.count = +payload.product.count;
    }
    state.currentProduct = payload.product;
  },
  setCurrentImageURL(state: any, payload: any) {
    state.currentImgInfo.url = `${axios.defaults.baseURL}/products/${
      payload.id
    }/image`;
  },
  setCurrentImageInfo(state: any, payload: any) {
    state.currentImgInfo = payload.imgInfo;
  },
  clearCurrentProduct(state: any) {
    state.currentProduct = {};
  },
  clearCurrentImageInfo(state: any) {
    state.currentImgInfo = {};
  },
};

const getters = {
  currentProduct(state: any) {
    if (state.currentProduct.date) {
      return {
        ...state.currentProduct,
        date: state.currentProduct.date.slice(0, 10),
      };
    }
    return state.currentProduct;
  },
};

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
});

export default store;
