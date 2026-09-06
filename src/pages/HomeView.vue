<script setup>
import Hero from './home/Hero.vue';
import Projects from '@/pages/home/Projects.vue'
import Introduction from '@/pages/home/Introduction.vue'
import prodects from './home/prodects.vue';
;
</script>

<template>
    <Hero />
    <div class="container">
        <Introduction />
        <Projects />
        <prodects />
   
    </div>
</template>

<style scoped>
.container {
    max-width: 2027px;
    margin: 0 auto;
}
</style>