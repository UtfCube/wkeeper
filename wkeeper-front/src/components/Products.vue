<template>
  <div class="products">
    <b-table
      :data="products"
      hoverable
      :checked-rows.sync="checkedProducts"
      checkable
      @click="product => click(product)"
    >
      <template slot-scope="products">
        <b-table-column field="id" label="№" numeric centered>
          {{ products.row.id }}
        </b-table-column>

        <b-table-column label="Название" centered>
          {{ products.row.name }}
        </b-table-column>

        <b-table-column label="Описание" centered>
          {{ products.row.description }}
        </b-table-column>

        <b-table-column label="Местоположение" centered>
          {{ products.row.location }}
        </b-table-column>
      </template>
    </b-table>
    <div class="field is-grouped">
      <p class="control">
        <button class="button is-primary" @click="add">Добавить товар</button>
      </p>
      <p class="control">
        <button
          class="button is-danger"
          @click="deleteProducts"
          :disabled="!checkedProducts.length"
        >
          <!--<b-icon icon="close"></b-icon>-->
          <span>Удалить товары</span>
        </button>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import ModalProductEdit from './ModalProductEdit.vue';
import ModalProductNew from './ModalProductNew.vue';
import axios from 'axios';
import { DialogError } from '@/utils';

@Component
export default class Products extends Vue {
  private error: string = '';
  private checkedProducts: any[] = [];

  async beforeMount() {
    const error = await this.$store.dispatch('getProducts');
    if (error) {
      this.$dialog.alert({ ...DialogError, message: error });
    }
  }

  get products() {
    return this.$store.state.products;
  }

  clicked(id: number) {
    this.$router.push({ name: 'productEdit', params: { id: id.toString() } });
  }

  add() {
    this.$modal.open({
      parent: this,
      component: ModalProductNew,
      hasModalCard: true,
    });
    //this.$router.push({ name: 'new' });
  }

  click(product: any) {
    this.$store.commit('setCurrentProduct', { product: product });
    this.$store.commit('setCurrentImageURL', { id: product.id });
    this.$modal.open({
      parent: this,
      component: ModalProductEdit,
      hasModalCard: true,
    });
  }

  async deleteProducts() {
    const error = await this.$store.dispatch(
      'deleteProducts',
      this.checkedProducts,
    );
    this.checkedProducts = [];
    if (error) {
      this.$dialog.alert({ ...DialogError, message: error });
    }
  }
}
</script>
