import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
// import {  } from "vue-router";

const vuetify = createVuetify({
  components,
  directives,
});

// createApp(App).use(vuetify).mount("#app");

const app = createApp(App);
app.use(vuetify);
// app.use(router);
app.mount("#app");
