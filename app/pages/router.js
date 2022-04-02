import { home } from "./home.js";
import { about } from "./about.js";
import { contact } from "./contact.js";

export function router(data) {
  switch (data.route) {
    case "":
    case "#home":
      return home(data);
      break;
    case "#about":
      return about(data);
      break;
    case "#contact":
      return contact(data);
      break;
  }
}
