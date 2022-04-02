import { users } from "../components/users.js";

export function about(data) {
  return /*html*/ `
    <h2>About Page</h2>
    <h3>${data.count}</h3>
    <button onclick="increment()">Increment</button>
    <button onclick="decrement()">Decrement</button>
    <hr/>
    ${users(data)}
  `;
}
