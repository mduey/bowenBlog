<script></script>

<template>
  <div class="holy-grail-grid">
    <header class="header">Duey.org</header>
    <main class="main-content"></main>
    <aside class="right-sidebar">
      About <br />
      Contact <br />
      Links <br />
    </aside>
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
  text-align: right;
  font-size: x-large;
  padding-right: 100px;
  text-shadow: 2px 2px rgb(214, 214, 214);
  border-radius: 18px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}
.holy-grail-grid > .main-content {
  grid-area: main-content;
}
.holy-grail-grid > .right-sidebar {
  /* padding: 1rem; */
  width: 80px;
  height: 80px;
  border-radius: 0 50% 50% 50%;
  transform: rotate(45deg);
  /* grid-area: right-sidebar; */
  text-align: center;
  /* border-radius: 25px; */
  background-color: #ffffffe6;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}
.holy-grail-grid > .footer {
  grid-area: footer;
}

/* tablet breakpoint */
@media (min-width: 768px) {
  .holy-grail-grid {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "header header"
      "main-content main-content"
      "right-sidebar right-sidebar"
      "footer footer";
  }
}
/* desktop breakpoint */
@media (min-width: 1024px) {
  .holy-grail-grid {
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas:
      "header header header header header"
      "main-content main-content main-content main-content right-sidebar"
      "footer footer footer footer footer";
  }
}
</style>
