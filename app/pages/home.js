export function home(data) {
  return /*html*/ `
    <h2>Home</h2>
    <h3>${data.count}</h3>
    <button onclick="increment()">Inrement</button>
    <button onclick="decrement()">Decrement</button>
  `;
}
