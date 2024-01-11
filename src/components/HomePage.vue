<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

function test() {
  console.log("test clicked");
}
</script>

<template>
  <h1 style="margin-bottom: 4rem">Duey.org</h1>

  <div class="post">asfdasdfasdfasdfsadfasdf</div>
</template>

<style scoped>
.post {
  color: red;
}
</style>
