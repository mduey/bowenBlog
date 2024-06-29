<script></script>

<template>
  <div class="holy-grail-grid">
    <header class="header">
      <button class=".maincontent">Duey.org</button>
    </header>
    <main class="main-content">Duey.org is under maintenence.</main>
    <aside class="left-sidebar"></aside>
    <aside class="right-sidebar"></aside>
    <footer class="footer">Duey.org March 2024</footer>
  </div>
</template>

<style>
/* grid container */
.holy-grail-grid {
  display: grid;
  grid-template-areas:
    "header"
    "main-content"
    "left-sidebar"
    "right-sidebar"
    "footer";
}

/* general column padding */
.holy-grail-grid > * {
  padding: 1rem;
}

/* assign columns to grid areas */
.holy-grail-grid > .header {
  grid-area: header;
  background-color: #ffffffe6;
  text-align: left;
  font-size: x-large;
  padding-left: 100px;
  text-shadow: 2px 2px rgb(214, 214, 214);
  border-radius: 18px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  position: relative;
}
.holy-grail-grid > .main-content {
  grid-area: main-content;
  background-color: #ffffffe6;
  text-align: center;
  font-size: x-large;
  margin: 1rem;
  padding-top: 50px;
  padding-bottom: 50px;
  text-shadow: 2px 2px rgb(214, 214, 214);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  font-family: "Arial", Times, serif, system-ui, Avenir, Helvetica, Arial,
    sans-serif;
  text-align: center;
  font-size: 18px;
  color: rgb(66, 66, 66);
}
.holy-grail-grid > .right-sidebar {
  text-align: center;
}
.holy-grail-grid > .left-sidebar {
  text-align: center;
}
.holy-grail-grid > .footer {
  grid-area: footer;
  color: white;
}

/* tablet breakpoint */
@media (min-width: 768px) {
  .holy-grail-grid {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "header header"
      "main-content main-content"
      "left-sidebar right-sidebar"
      "footer footer";
  }
}
/* desktop breakpoint */
@media (min-width: 1024px) {
  .holy-grail-grid {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "header header header header"
      "left-sidebar main-content main-content right-sidebar"
      "footer footer footer footer";
  }
}
</style>
