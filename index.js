import { data } from "./app/data.js";
import { listeners } from "./app/listeners.js";
import { template } from "./app/template.js";

const app = new Reef("#app", {
  data,
  listeners,
  template,
});

app.render();

window.addEventListener("hashchange", () => {
  app.data.route = window.location.hash;
});
