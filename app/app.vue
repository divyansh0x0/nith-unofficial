<script lang="ts" setup>
useThemeManager();
</script>

<template>
    <NuxtLoadingIndicator />
    <NavigationBar />
    <SideBar />
    <NuxtPage/>
    <footer>© College Portal</footer>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity var(--transition-speed) ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}



.slide-left-enter-active,.slide-left-leave-active {
    transition: transform var(--transition-speed) ease,
}

.slide-left-enter-to,.slide-left-leave-from {
    transform: translateX(0);
}

.slide-left-enter-from,.slide-left-leave-to {
    transform: translateX(100%);
}

</style>
