export function contact({ name }) {
  return /*html*/ `
    <h2>Contact</h2>
    <p>Enter your name below and see the magic</p>
    <label for="exampleInput">Your Name</label>
    <input 
      type="text" 
      placeholder="Enter your name" 
      id="exampleInput" 
      oninput="changeName()"
      value=${name}
    >
    <br/>
    <h3><i>${name}<i/></h3>
  `;
}
