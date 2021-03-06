import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import axios from 'axios';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

Vue.use(Buefy);
axios.defaults.baseURL = 'http://localhost:3000/api';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
