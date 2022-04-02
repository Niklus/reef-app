export function header({ title }) {
  return /*html*/ `
    <header>
      <h1>${title}</h1>
      <div>
        <a class="button" href='#home'>Home</a> 
        <a class="button" href='#about'>About</a>
        <a class="button" href='#contact'>Contact</a>
      </div>
    </header>
  `;
}
