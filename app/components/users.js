export function users({ users }) {
  return /*html*/ `
    <div class="users">
      <button class="button-primary" onclick="getUsers()">Get Users</button>
      <div>
        ${(() => {
          return users
            .map((user) => {
              return /*html*/ `
                <p>Name: ${user.name}</p>
                <p>Email: ${user.email}</p>
                <p>Phone: ${user.phone}</p>   
                <hr/> 
              `;
            })
            .join("");
        })()}
      </div>
    </div>`;
}
