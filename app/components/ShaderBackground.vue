<template>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
         viewBox="0 0 1920 1080" opacity="0.36">
        <defs>
            <filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox"
                    primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feGaussianBlur stdDeviation="68" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic"
                                edgeMode="none" result="blur"></feGaussianBlur>
            </filter>
        </defs>
        <g filter="url(#bbblurry-filter)">
            <ellipse class="blob" rx="500" ry="150" cx="960" cy="540"
                     fill="hsl(37, 99%, 67%)"></ellipse>
            <ellipse class="blob" rx="971.5" ry="150" cx="540.9159210957087" cy="316.9983971133268"
                     fill="hsl(316, 73%, 52%)"></ellipse>
            <ellipse class="blob" rx="971.5" ry="150" cx="315.26217289198945" cy="356.3880173080257"
                     fill="hsl(185, 100%, 57%)"></ellipse>
        </g>
    </svg>
</template>

<script setup>

</script>

<style scoped>
    .blob{
        fill: var(--color-primary);
    }
    svg{
        width: 100%;
        height: 100%;
    }
</style>