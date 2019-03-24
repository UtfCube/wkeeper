<template>
    <div class="modal-card" >
        <header class="modal-card-head">
            <p class="modal-card-title">Информация о продукте</p>
            <button class="delete" @click="$parent.close()" aria-label="close"></button>
        </header>

        <section class="modal-card-body">
            <ImageInput v-model="imgInfo"/>
            <ProductInfo v-model="product"/>
        </section>

        <footer class="modal-card-foot">
            <button class="button is-primary" @click="submit">Сохранить продукт</button>
        </footer>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Watch } from 'vue-property-decorator';
    import ImageInput from './ImageInput.vue';
    import ProductInfo from './ProductInfo.vue';
    import axios from 'axios';
    import { DialogError } from '@/utils';

    @Component({
        components: { ImageInput, ProductInfo }
    })
    export default class ProductNew extends Vue {

        beforeMount() {
            this.$store.commit('clearCurrentProduct');
            this.$store.commit('clearCurrentImageInfo');
        }

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

        async submit() {
            const error = await this.$store.dispatch('createImage', this.$route.params.id);
            if (error) {
                this.$dialog.alert({ ...DialogError, message: error });
            }
            else {
                this.$dialog.alert("Продукт успешно добавлен");
            }
        }       
    }
</script>

