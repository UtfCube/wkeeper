<template>
    <div class="modal-card" style="width: auto">
        <section class="modal-card-body">
            <div v-if="loading" class="loading">
                Загрузка...
            </div>

            <div v-if="error" class="error">
                {{ error }}
            </div>

            <div v-if="product" class="content">
                <ImageInput v-model="imgInfo"/>
                <ProductInfo v-model="product"/>
                <button @click="save">Сохранить изменения</button>
                <button @click="deleteProduct">Удалить товар</button>
            </div>

        </section>
    </div>
</template>

<script lang='ts'>
    import { Component, Vue } from 'vue-property-decorator';
    import axios from 'axios';
    //import { Product } from '../interfaces/product.interface';
    import ImageInput from './ImageInput.vue';
    import ProductInfo from './ProductInfo.vue';
    import { DialogError } from '@/utils';

    @Component({
        components: { ImageInput, ProductInfo }
    })
    export default class ProductEdit extends Vue {
        private loading: boolean = false;
        private error: string = "";

        get product () {
            return this.$store.getters.currentProduct;
        }
        set product(product: any) {
            this.$store.commit('setCurrentProduct', { product: product });
        }
        get imgInfo () {
            return this.$store.state.currentImgInfo;
        }
        set imgInfo(imgInfo: any) {
            this.$store.commit('setCurrentImageInfo', { imgInfo: imgInfo });
        }

        async beforeMount() {
            if (Object.keys(this.product).length === 0 && this.product.constructor === Object) {
                const error = await this.$store.dispatch('getProduct', this.$route.params.id);
                if (error) {
                    this.$dialog.alert({ ...DialogError, message: error });
                }
            }
        }

       async save () {
            const error = await this.$store.dispatch('updateImage', this.$route.params.id);
            if (error) {
                this.$dialog.alert({ ...DialogError, message: error });
            }
            else {
                this.$dialog.alert("Изменения успешно сохранены");
            }
        }

        async deleteProduct () {
            const error = await this.$store.dispatch('deleteProduct', this.$route.params.id);
            if (error) {
                this.$dialog.alert({ ...DialogError, message: error });
            }
            else {
                this.$router.push({ name: 'products'});
            }
        }
    }
</script>
