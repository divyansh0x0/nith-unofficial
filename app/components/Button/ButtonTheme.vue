<script setup lang="ts">
// Map icon names to SVG markup
import { useThemeManager } from "@/composables/useThemeManager";
import { Icon } from "@iconify/vue";



const { theme, setTheme } = useThemeManager();

function toggleTheme() {
    setTheme(theme.value === "dark" ? "light" : "dark");
}
</script>

<template>
    <button @click="toggleTheme">
        <Icon v-if="theme === 'light'" icon="ic:round-dark-mode" height="2em"  />
        <Icon v-else icon="ic:baseline-light-mode" height="2em"  />
    </button>
</template>

<style scoped>
button{
    background: transparent;
    border: none;
    color: inherit;
    cursor: pointer;
    padding: var(--padding-md) var(--padding-md) var(--padding-md) 0;
}
svg {
    display: block;
    margin: 0;
    height: 2em;
    aspect-ratio: 1;
    color: inherit;
    *{
        color: inherit;
    }
}
</style>