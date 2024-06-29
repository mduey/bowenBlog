import { createMemoryHistory, createRouter } from "vue-router";

import Whiskey from "./Whiskey.vue";
import Beer from "./Beer.vue";

const routes = [
  { path: "/", component: Whiskey },
  { path: "/about", component: Beer },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
