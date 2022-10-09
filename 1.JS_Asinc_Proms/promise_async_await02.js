/*Usando o método tradicional
fetch("https://api.github.com/users/caiolemedev")
  .then((response) => response.json())
  .then((data) => fetch(data.repos_url))
  .then((res) => res.json())
  .then((d) => console.log(d))
  .catch((error) => console.log(error));
*/
async function start() {
  const url = 'https://api.github.com/users/caiolemedev'
  const user = await fetch(url).then(r => r.json())
  const userRepos = await fetch(user.repos_url).then(r => r.json())
  console.log(userRepos)
}

start().catch(e => console.log(e))
