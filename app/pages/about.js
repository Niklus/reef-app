export function about(data) {
  return /*html*/ `
    <h2>About</h2>
    <h3>${data.count}</h3>
    <button onclick="increment()">Inrement</button>
    <button onclick="decrement()">Decrement</button>
  `;
}
