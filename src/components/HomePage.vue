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
  <h1 style="margin-bottom: 4rem">duey.org</h1>

  <div class="post">asfdasdfasdfasdfsadfasdf</div>
</template>

<style scoped>
.post {
  color: rgb(21, 0, 255);
}
</style>
