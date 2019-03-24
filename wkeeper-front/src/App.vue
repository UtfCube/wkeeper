<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Header from '@/components/Header.vue';
import { Component, Vue } from 'vue-property-decorator';
// TODO add header
@Component({
  components: { Header },
})
export default class App extends Vue {}
</script>
<!--
<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
-->
