<script setup>
import HeroSection from "~/components/HeroSection.vue";
</script>
<template>
    <main>
        <HeroSection class="odd-section"/>
        <NewsSection class="even-section"/>
    </main>
</template>
<style scoped>
.odd-section{
    background-color: var(--color-surface-container-lowest);
}
.even-section{
    background-color: var(--color-surface-container-low)
}
</style>
