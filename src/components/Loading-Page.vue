<script setup>
import gsap from 'gsap';
import { onMounted } from 'vue';
import SplitText from 'gsap/SplitText';

onMounted(() => {
    gsap.registerPlugin(SplitText)

    const split = SplitText.create("#hero-text", {
        type: "chars"
    })

    gsap.from(split.chars, {
        y: -50,
        opacity: 0,
        ease: "back.out(1.7)",
        stagger: 0.2,
        duration: 0.2,
    })
})



</script>
<template>

    <section
        class="loading-page-section fixed bg-white top-0 bottom-0 right-0 left-0 z-40 flex items-center justify-center w-full ">
        <h1 id="hero-text" class="text-9xl font-bold">STé SEMADIV S.A.R.L</h1>
    </section>

</template>
<style scoped>
.loading-page-section h1 {
    -webkit-text-stroke: 2px blue;
    color: transparent;
}
</style>