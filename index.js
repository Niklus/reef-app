import { data } from "./app/data.js";
import { listeners } from "./app/listeners/index.js";
import { template } from "./app/template.js";
import { changeRoute } from "./utils/changeRoute.js";

const app = new Reef("#app", {
  data,
  listeners,
  template,
});

app.render();

window.addEventListener("hashchange", (event) => {
  changeRoute(app, event);
});
