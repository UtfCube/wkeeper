<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link :to="{ name: 'products' }" class="navbar-item">
                ПРОДУКТЫ
            </router-link>
            <a role="button" class="navbar-burger burger" @click="showNav = !showNav" aria-label="menu" aria-expanded="false" data-target="navbarElements">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarElements" class="navbar-menu" :class="{ 'is-active' : showNav }">
            <div class="navbar-start">
                <router-link :to="{ name: 'products' }" class="navbar-item">
                    Домой
                </router-link>

                <router-link :to="{ name: 'new' }" class="navbar-item">
                    Добавить продукт
                </router-link>
            </div>    
        </div>
    </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
    private showNav: boolean = false;
}
</script>
