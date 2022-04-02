import { header } from "./components/header.js";
import { router } from "./pages/router.js";

export function template(data) {
  return /*html*/ `
    ${header(data)}
    <div class="pages">
      ${router(data)}
    </div>
  `;
}
