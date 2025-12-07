<script setup lang="ts">
import { Icon } from "@iconify/vue";
interface NavLink {
    name: string,
    url: string,
    icon: string
}

const links: NavLink[] = [
    {
        name: "Home",
        url : "/",
        icon: "mdi:home-variant-outline"
    },
    {
        name: "Map",
        url : "/map",
        icon: "mdi:map"
    },
    {
        name: "Notes",
        url : "/notes",
        icon: "mdi:notebook-multiple"
    },
    {
        name: "Photos",
        url : "/photos",
        icon: "mdi:photo-library"
    }
];
</script>

<template>
    <div class="nav-bg-overlay"></div>
    <nav class="navbar">
<!--        <Icon icon="famicons:school-outline" class="nith-icon" width="2em"/>-->
        <div class="container">
            <ul class="nav-links">
                <li v-for="link in links" :key="link.name">
                    <NuxtLink :to="link.url" class="nav-link">
                        <Icon class="nav-link-icon" :icon="link.icon"/>
                        <span class="nav-link-name">{{ link.name }}</span>
                    </NuxtLink>
                </li>
            </ul>
            <div class="right">
                <ButtonTheme/>
                <Button>
                    <Icon icon="mynaui:sidebar-alt" height="2em"  />
                </Button>
            </div>
        </div>
    </nav>
</template>

<style scoped lang="scss">
*{
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
#sidebar-button{
    border-radius: var(--border-radius-circle);
    padding: var(--padding-md) ;
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
    width: 100%;
    padding: 1em;
    //backdrop-filter: blur(10px);
}
.container{
    width: 100%;
    display: flex;
    align-items: center;
    gap: var(--padding-sm);
    justify-content: space-between;
    .right{
        display: flex;
        align-items: center;
        background-color: var(--color-navbar-container);
        border-radius: var(--border-radius-circle);
        padding: var(--padding-sm);
        gap: var(--padding-sm);
        backdrop-filter: blur(10px);
    }
}
button{
    cursor: pointer;
    background-color: transparent;
    border: none;
    padding: var(--padding-sm) ;
    border-radius: var(--border-radius-circle);
    font-size: 0.7em;
    &:hover {
        background-color: var(--color-navbar-highlight);
    }
}
.nav-links {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: fit-content;
    border-radius: var(--border-radius-circle);
    padding: var(--padding-sm) var(--padding-sm);
    background-color: var(--color-navbar-container);
    backdrop-filter: blur(10px);

    li {
        list-style: none;
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
    &.router-link-exact-active{

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