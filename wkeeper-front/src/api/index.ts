import axios from 'axios';

export default class Api {
  public static getProducts() {
    return axios.get('/products');
  }

  public static createImage(formData: FormData) {
    return axios.post('/products/new/image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  public static createProduct(product: any, image_id: number) {
    return axios.post(`/products/new?image_id=${image_id}`, product);
  }

  public static addProduct(formData: FormData) {
    return axios.post('/products', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  public static deleteProducts(ids: number[]) {
    return axios.post('/products/delete', ids);
  }

  public static deleteProduct(id: number) {
    return axios.delete(`/products/${id}`);
  }

  public static getProduct(id: number) {
    return axios.get(`/products/${id}`);
  }

  public static updateProduct(id: number, product: any) {
    return axios.post(`/products/${id}`, product);
  }

  public static updateImage(id: number, formData: FormData) {
    return axios.post(`/products/${id}/image`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }
}
