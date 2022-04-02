import { users } from "../components/users.js";

export function contact(data) {
  return /*html*/ `
    <h2>Contact Page</h2>
    <p>Enter your name below and see the magic</p>
    <label for="exampleInput">Your Name</label>
    <input 
      type="text" 
      placeholder="Enter your name" 
      id="exampleInput" 
      oninput="changeName()"
      value="${data.name}"
    />
    <br/>
    <h3><i>${data.name}</i></h3>
    <hr/>
    ${users(data)}
  `;
}
