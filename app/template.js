import { home } from "./pages/home.js";
import { about } from "./pages/about.js";

export const template = (data, elem) => {
  return /*html*/ `
    <header>
      <a class="button button-primary" href='#home'>Home</a> 
      <a class="button button-primary" href='#about'>About</a>
    </header>
    <div class="pages">
      ${((data) => {
        if (data.route === "" || data.route === "#home") {
          return home(data);
        } else if (data.route === "#about") {
          return about(data);
        }
      })(data)}
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
