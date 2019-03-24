<template>
  <div class="content">
    <ImageInput v-model="imgInfo" />
    <!--<img slot="activator" :src="imgInfo.url" width="255" height="255" alt="картинка не найдена">
        </ImageInput>-->
    <ProductInfo v-model="product" />
    <button @click="submit">Добавить товар</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import ImageInput from './ImageInput.vue';
import ProductInfo from './ProductInfo.vue';
import axios from 'axios';
import { DialogError } from '@/utils';

@Component({
  components: { ImageInput, ProductInfo },
})
export default class ProductNew extends Vue {
  beforeMount() {
    this.$store.commit('clearCurrentProduct');
    this.$store.commit('clearCurrentImageInfo');
  }

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

  async submit() {
    const error = await this.$store.dispatch(
      'createImage',
      this.$route.params.id,
    );
    if (error) {
      this.$dialog.alert({ ...DialogError, message: error });
    } else {
      this.$dialog.alert('Продукт успешно добавлен');
    }
  }
}
</script>
