import { Http } from "../utils/Http.js";

const http = new Http("https://jsonplaceholder.typicode.com");

export const listeners = {
  increment(event) {
    this.data.count++;
  },
  decrement(event) {
    this.data.count--;
  },
  getUsers(event) {
    http.get("/users").then((users) => {
      this.data.users = users;
    });
  },
};
