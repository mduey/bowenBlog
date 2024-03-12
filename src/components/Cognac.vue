<script></script>

<template>
  <div class="parent">
    <div class="collumn1">
      Times of the day
      <div>MORNING</div>
    </div>

    <div class="collumn2">
      Without
      <div>
        WITH <br />
        <br />
        <br />
        <br />
        5
      </div>

      <div class="row1">
        Fruits
        <div>APPLE</div>
      </div>
    </div>
  </div>
</template>

<style>
.parent {
  display: grid;
  grid-template-columns: 1fr 200px;
  grid-template-rows: 80px 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  color: wheat;
}
.collumn1 {
  background-color: darkslategray;
}
.collumn2 {
  background-color: rgb(128, 80, 128);
}
.row1 {
  background-color: coral;
}
</style>
