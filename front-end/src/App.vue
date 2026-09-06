<script setup>
import NavigationBar from "./components/Navigation-Bar.vue";
import Feuter from "./components/Feuter.vue";
import LoadingPage from "./components/Loading-Page.vue";
import { ref } from "vue";
import { onMounted } from "vue";

const scrolliUp = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

const loadingPage = ref(true)

onMounted(() => {
  setTimeout(() => {
    loadingPage.value = false
  }, 3250)
})


</script>

<template>
  <section class="website relative">
    <LoadingPage v-if="loadingPage" />
    <div v-else class="CONTENT">
      <NavigationBar />
      <router-view></router-view>
      <Feuter />
      <div @click="scrolliUp" class="scrollicon bg-blue-700 text-white p-3 fixed cursor-pointer  bottom-10 right-10 "><i
          class="bi bi-arrow-bar-up"></i>
      </div>
    </div>
  </section>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
