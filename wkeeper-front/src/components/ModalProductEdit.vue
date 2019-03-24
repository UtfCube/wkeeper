<template>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Информация о продукте</p>
      <button
        class="delete"
        @click="$parent.close()"
        aria-label="close"
      ></button>
    </header>

    <section class="modal-card-body">
      <ImageInput v-model="imgInfo" />
      <ProductInfo v-model="product" />
    </section>

    <footer class="modal-card-foot">
      <button class="button is-primary" @click="save">
        Сохранить изменения
      </button>
      <button class="button is-danger" @click="deleteProduct">
        Удалить товар
      </button>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import ImageInput from './ImageInput.vue';
import ProductInfo from './ProductInfo.vue';
import { DialogError } from '@/utils';
import axios from 'axios';

@Component({
  components: { ImageInput, ProductInfo },
})
export default class ModalForm extends Vue {
  private loading: boolean = false;
  private error: string = '';

  get product() {
    return this.$store.getters.currentProduct;
  }
  set product(product: any) {
    this.$store.commit('setCurrentProduct', { product: product });
  }
  get imgInfo() {
    return this.$store.state.currentImgInfo;
  }
  set imgInfo(imgInfo: any) {
    this.$store.commit('setCurrentImageInfo', { imgInfo: imgInfo });
  }

  async beforeMount() {
    if (
      Object.keys(this.product).length === 0 &&
      this.product.constructor === Object
    ) {
      const error = await this.$store.dispatch('getProduct', this.product.id);
      if (error) {
        this.$dialog.alert({ ...DialogError, message: error });
      }
    }
  }

  async save() {
    const error = await this.$store.dispatch('updateImage', this.product.id);
    if (error) {
      this.$dialog.alert({ ...DialogError, message: error });
    } else {
      this.$dialog.alert('Изменения успешно сохранены');
    }
  }

  async deleteProduct() {
    const error = await this.$store.dispatch('deleteProduct', this.product.id);
    if (error) {
      this.$dialog.alert({ ...DialogError, message: error });
    } else {
      (this.$parent as any).close();
    }
  }
}
</script>
