import { home } from "./pages/home.js";
import { about } from "./pages/about.js";
import { contact } from "./pages/contact.js";

export const template = (data, elem) => {
  return /*html*/ `
    <header>
      <a class="button" href='#home'>Home</a> 
      <a class="button" href='#about'>About</a>
      <a class="button" href='#contact'>Contact</a>
    </header>
    <div class="pages">
      ${((route) => {
        if (route === "" || route === "#home") {
          return home(data);
        } else if (route === "#about") {
          return about(data);
        } else if (route === "#contact") {
          return contact(data);
        }
      })(data.route)}
    </div>
    <hr/>
    <div class="users">
      <button onclick="getUsers()">Get Users</button>
      <pre>${((users) => {
        if (users.length > 0) {
          return JSON.stringify(users, null, 3);
        } else {
          return "";
        }
      })(data.users)}</pre>
    </div>
  `;
};
