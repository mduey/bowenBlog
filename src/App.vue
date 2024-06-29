<script setup>
// import HomePage from'./components/HomePage.vue'
import Whiskey from "./components/Beer.vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <h1 style="color: white">TESTs</h1>
    <h1 style="color: white">bean</h1>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
    <h1 style="color: white">bean</h1>
  </nav>
  <!-- <Whiskey /> -->
  <h1 style="color: white">bean</h1>
  <RouterView></RouterView>
</template>

<style scoped></style>
