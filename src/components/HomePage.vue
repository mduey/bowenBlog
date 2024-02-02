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
  <div>
  <h1 style="margin-bottom: 2rem">duey.org</h1>

  <div class="post" style="font-size: large;font-weight: 300;color:rgb(198, 32, 32) ;">
    I am looking for a partner to hike the PCT with in 2024
  </div>

  <div class="boxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere hendrerit felis sed ultrices. Nulla congue vehicula cursus. Vivamus egestas porta neque, sit amet malesuada nibh vehicula eget. Sed pulvinar nibh risus, sed elementum nulla pretium quis. Etiam dignissim turpis consectetur consequat volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas nibh turpis, faucibus eget ornare eget, vestibulum non massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut interdum id ligula ac condimentum. Pellentesque pulvinar ipsum lectus, iaculis tristique odio sagittis ac. Nulla lobortis massa non libero laoreet egestas. Mauris id tristique felis. Integer posuere nunc elementum neque malesuada, sit amet luctus lectus varius. Aenean arcu libero, facilisis imperdiet ultrices sed, ullamcorper ac eros.</div>

  <div class="post">
    About: My name is Bowen Duey. I created this blog to display my projects and interests  in hope of finding like minded people to hike the PCT with me in 2024.
  </div>
</div>

<footer class="post" style="margin-top: 30rem">
  &copy; <span id="currentYear"></span> duey.org. All rights reserved.
</footer>
</template>





<style scoped>  
.post {
  color: rgb(0, 0, 0);
  margin-bottom: 3rem;
}
</style>

<style scoped>
.boxed {
  color: rgb(0, 0, 0);
  margin-bottom: 4rem;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid rgb(126, 126, 130); 

}
</style>




