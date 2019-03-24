import Vue from 'vue';
import Router from 'vue-router';

const routerOptions = [
    {
        path: '/',
        redirect: { name: 'products' }
    },
    {
        name: 'products',
        path: '/products',
        component: 'Products',
    },
    {
        name: 'new',
        path: '/products/new',
        component: 'ProductNew',
    },
    {
        name: 'productEdit',
        path: '/products/:id',
        props: true,
        component: 'ProductEdit',
    },
    {
        name: 'notFound',
        path: '*',
        component: 'NotFound',
    },
];

const routes = routerOptions.map(route => {
    return {
      ...route,
      component: () => import(`@/components/${route.component}.vue`)
    }
  })
  
  Vue.use(Router)
  
  export default new Router({
    routes,
    mode: 'history'
  })