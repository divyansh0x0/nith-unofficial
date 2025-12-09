<script setup lang="ts">
import {Icon} from "@iconify/vue";

const sidebarOpen = useSidebar();
const navlinks = useNavLinks();

</script>

<template>
    <Transition name="fade">
        <div v-if="sidebarOpen" class="sidebar-backdrop" @click="sidebarOpen = false"/>
    </Transition>
    <Transition name="slide-left">
        <aside v-if="sidebarOpen" class="sidebar" @click.stop>
            <ul class="link-container">
                <li v-for="link in navlinks" :key="link.name" class="link-category-list">
                    <h6>
                        <NuxtLink :to="link.url" class="link category">
                            <Icon class="nav-category-icon" :icon="link.icon"/>
                            {{ link.name }}
                        </NuxtLink>
                    </h6>
                    <ul v-if="link.children && link.children.length">
                        <li v-for="child_link in link.children" :key="child_link.name">
                            <NuxtLink :to="child_link.url" class="link subcategory-link">
                                <Icon class="nav-link-icon" :icon="child_link.icon"/>
                                <span class="nav-link-name">{{ child_link.name }}</span>
                            </NuxtLink>
                        </li>
                    </ul>
                </li>
            </ul>
            <div class="utility">
                <ButtonTheme/>
            </div>

        </aside>
    </Transition>

</template>

<style scoped>
.sidebar-backdrop {
    background: var(--color-sidebar-backdrop);
    backdrop-filter: blur(10px);
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 99;
}

.sidebar {
    padding: var(--padding-md);
    background: var(--color-sidebar-container);
    backdrop-filter: blur(10px);
    height: 100vh;
    min-width: 35vw;
    width: fit-content;
    max-width: 90vw;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 99;
    overflow-y: auto;
    box-shadow: 0 4px 38px 0px var(--color-shadow), 0 6px 20px 0 var(--color-shadow);
}

.link-container {
    height: fit-content;
    width: 100%;
}
.link{
    text-decoration: none;
    border-radius: var(--border-radius);
    &:hover{
        background-color: var(--color-navbar-highlight);
    }
}
.link-category-list {
    background: var(--color-navbar-container);
    margin-bottom: 1em;
    border-radius: var(--border-radius);
    height: fit-content;
    width: 100%;
}
.link.category {
    width: 100%;
    display: block;
    padding: var(--padding-md) var(--padding-lg);
}
.subcategory-link {
    padding: var(--padding-md) var(--padding-lg);
    gap: var(--spacing-lg);
    display: flex;
}

li {
    list-style: none;
}

.nav-category-icon {
    margin-right: var(--spacing-md);
}


.utility {
    background: var(--color-navbar-container);
    width: fit-content;
    height: fit-content;
    padding: 0 ;
    border-radius: var(--border-radius);
    justify-content: center;
    align-items: center;
    align-content: center;
    justify-items: center;
    position: absolute;
    bottom: var(--padding-md);
    left: var(--padding-md);
}

</style>