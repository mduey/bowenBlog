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

  <div class="post">
    adfgererg789789789789789789789879766575 546456 456456456456456546 546 546
    546456456456456456456546546546546456asdfsadfasdf
  </div>
</template>

<style scoped>
.post {
  color: red;
  border: 1px solid gray;
  margin-bottom: 3px;
}
</style>
