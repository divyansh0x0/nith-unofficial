<script setup lang="ts">
import {Icon} from "@iconify/vue";
import { ref, onMounted, onBeforeUnmount } from 'vue'

const sidebarOpen = useSidebar();
const navlinks = useNavLinks();
let collapse_width = 0;

const navbarRef = ref<HTMLElement | null>(null)
const collapseNavbar = ref(false)

// Used to collapse and expand navbar
const checkWidth = () => {
    if (!navbarRef.value) return
    console.log(navbarRef.value.offsetWidth+80, window.innerWidth, collapse_width, collapseNavbar.value);
    if(!collapseNavbar.value)
    {
        const containerWidth = navbarRef.value.offsetWidth;
        // Collapse when window is too small
        if (window.innerWidth < containerWidth) {
            collapseNavbar.value = true;
            collapse_width = containerWidth;
        }
        else {
            collapse_width= 0;
        }
    }
    else{
        if(collapse_width < window.innerWidth){
            collapseNavbar.value = false;
        }
    }
}

onMounted(() => {
    checkWidth()
    window.addEventListener('resize', checkWidth)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', checkWidth)
})
</script>

<template>
    <nav ref="navbarRef"  class="navbar" :class="collapseNavbar? 'collapsed' : '' ">
        <div class="container">
            <ul  class="left">
                <li v-for="link in navlinks" :key="link.name">
                    <NuxtLink :to="link.url" class="nav-link">
                        <Icon class="nav-link-icon" :icon="link.icon"/>
                        <span class="nav-link-name">{{ link.name }}</span>
                    </NuxtLink>
                </li>
            </ul>
            <div class="right">
                <button id="sidebar-button" @click="sidebarOpen = true">
                    <Icon icon="mynaui:sidebar-alt" height="2em"/>
                </button>
            </div>
        </div>
    </nav>
</template>

<style scoped lang="scss">
* {
    -webkit-tap-highlight-color: transparent;
}

.nav-bg-overlay {
    z-index: 98;
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.45);
    display: none;
}

#sidebar-button {
    border-radius: var(--border-radius-circle);
    padding: var(--padding-lg);
    //width: 100%;
}

.navbar {
    color: var(--color-on-background);
    user-select: none;
    z-index: 99;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    position: fixed;
    display: flex;
    //justify-content: space-between;
    height: fit-content;
    min-width: max-content;
    width: 100%;
    padding: 1em;
    &.collapsed {
        .container{
            justify-content: end;

            .left{
                display: none;
            }
        }
    }
}

.container {
    width: 100%;
    display: flex;
    align-items: center;
    gap: var(--padding-sm);
    justify-content: space-between;

    .right, .left {
        align-items: center;
        display: flex;
        background-color: var(--color-navbar-container);
        border-radius: var(--border-radius-circle);
        padding: var(--padding-sm);
        width: fit-content;
        gap: var(--padding-sm);
        backdrop-filter: blur(10px);
        justify-content: space-evenly;
    }
    .right{
        padding: 0;
    }
    li {
        list-style: none;
    }
}

button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    padding: var(--padding-sm);
    border-radius: var(--border-radius-circle);
    font-size: 0.7em;

    &:hover {
        background-color: var(--color-navbar-highlight);
    }
}


.nav-link {
    text-align: center;
    display: block;
    width: 100%;
    height: 100%;
    color: var(--color-on-surface);
    text-decoration: none;
    padding: var(--padding-sm) var(--padding-md);
    border-radius: var(--border-radius-circle);
    border: 1px solid transparent;
    transition: var(--transition-speed) all;

    &:hover {
        border: 1px solid var(--color-navbar-highlight);
    }

    &.router-link-exact-active {
        background-color: var(--color-navbar-highlight);
    }
}

.nav-link-name {
    display: block;
    font-family: "Exo 2", sans-serif, serif;
}

.nav-link-icon {
    display: none;
    font-size: 2em;
    //width: 100%;
}


</style>