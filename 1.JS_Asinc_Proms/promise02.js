//Usado Codesandbox para rodar o código abaixo
//Podemos usar o encadeamento das promises para simplificar o código
//fazendo somente transformação de resposta para json e fetch no caminho
//O erro é exibido independente de onde ocorrer com apenas um fetch final

fetch('https://api.github.com/users/maykbrito')
  .then(response => response.json())
  .then(data => fetch(data.repos_url))
  .then(res => res.json())
  .then(d => console.log(d))
  .catch(err => console.log(err))
