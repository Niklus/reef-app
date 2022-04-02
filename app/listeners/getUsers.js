import { Http } from "../../utils/Http.js";

const http = new Http("https://jsonplaceholder.typicode.com");

export function getUsers(event) {
  http.get("/users").then((users) => {
    this.data.users = users;
  });
}
