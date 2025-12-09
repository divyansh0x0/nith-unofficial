<script setup lang="ts">

</script>

<template>
    <div class="root full-section">
        <h3>Welcome to</h3>
        <h1>National Insitute of Technology <br> Hamirpur </h1>
        <div class="hero-bg">
            <!--            <ShaderBackground class="bg-blob"/>-->
            <NITHGateSVG class="nith-svg"/>

        </div>
    </div>
</template>

<style scoped lang="scss">
.root {
    text-align: center;
    align-content: center;
    overflow: hidden;
    h3{
        font-size: min(4vw, max(0.9rem, 4vh));
    }
    h1 {
        padding: 0 var(--padding-sm);
        font-size: min(6vw, max(1rem, 7vh));
    }

    .hero-bg {
        position: absolute;
        z-index: 0;
        right: 0;
        bottom: 0;

        .bg-blob {
            position: absolute;
            width: 100vw;
            height: 100vh;
            top: 0;
            left: 0;
        }

    }


}
.nith-svg {
    width: 100vw;
    opacity: 0.3;

    transform: translate(10%, 30%);

    display: block;
    overflow: hidden;
    transition: all 250ms linear;
    //filter: drop-shadow(0 0 5px var(--color-secondary)) opacity(0.5);
}
@media (orientation: portrait), (max-aspect-ratio: 0.9) {
    .nith-svg{
        width: unset;
        height: 100vh;
        transform: translate(50%, 30%);
    }
}
</style>