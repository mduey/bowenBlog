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
  </div>
  <div class="post" style="font-size: large;font-weight: 600;">
    I am looking for a partner to hike the PCT with in 2024
  </div>

<div style="display: flex; flex-direction: column;">
    
  <div class="date"> February 11th, 2024 </div>
x
<img src="../assets/abc.png">
  x
  <div class="boxed"> This was my first sewing project, a lightweight, 72 liter, backpacking backpack. I decided to take on this project because I wanted an upgrade from my previous pack. I had a lot of time and not a lot of money, so making my own was the best option. 

If you do it right, the materials and pattern used to sew your own backpack will cost way less than most high-end backpacks on the market. 

I was able to make this backpack for less than $80, and grasp a basic understanding of sewing. I have since taken it on over 10 trips, and it’s still going strong. 

Here's how I did it. 

I researched endlessly and learned about materials and design. Check out r/myog on reddit, Josh Bukoski, ripstopbytheroll.com, and questoutfitters.com

I settled on questoutffiter’s design, an earlier version of Gossamer Gear’s g-4, and ordered the pattern, hardware, and a fabric sample sheet.

I chose Ripstop and Cordura, and slowly sewed the backpack together with my mom’s sewing machine. After some frustration and improvisation, my backpack was ready to go. 



I am glad I chose this design, Glen Van Peski imbued thi pattern with many clever tricks. The padding for the arm and waist straps have little velcro-openings, so that socks can be used as padding. The part of the backpack that rests against your back has a slot for half a foam sleeping/sit pad, and can be removed easily. The large pockets on all sides and roll top allow for plenty of expandability, I’ve been able to carry 45 pounds of wet gear. While the makeshift padding isn't the most comfortable, the skin on my hips stays on, and I am glad to be 1 pound lighter.


</div>
</div>

<div class="boxed">
    About: My name is Bowen Duey. I created this blog to display my projects and interests  in hope of finding like minded people to hike the PCT with me in 2024.
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
  box-shadow: 1px 1px;
  padding: 10px;
  line-height: 2rem;
  border: 1px solid rgb(126, 126, 130); 
}
</style>

<style scoped>
  .date {
      font-family: "Arial", Times, serif, system-ui, Avenir, Helvetica, Arial, sans-serif;
      width: 100%;
      text-align: right;
      font-size: 12px;
      color: grey;
    }
</style>




