const express = require('express') //chamando o módulo express

const app = express() //guardando o módulo inicializado do express na app

app.listen('3000') //o express vai ouvir a porta 3000 para exibir o projeto

//Especializar 2.2 - API no Back-End

//GET
/*
app.route('/').get((req, res) => res.send('hello'))
//função que indica a rota que o site irá fazer para o método get.
//Usamos req e res para mostrar a resposta da requisição.

app.route('/sobre').get((req, res) => res.send('Caio Leme'))
*/

//POST
/*
midware - intermediário do insomnia para identificar o json enviado
app.use(express.json())
//precisamos pegar o método json direto no express, todos req e res serão transformados em json

app.route('/').post((req, res) => res.send(req.body))
//rota post enviando como resposta o próprio corpo da requisição
*/

//PUT
/*
let author = 'Caio Leme'
app.route('/').get((req, res) => res.send(author)) //mostra o valor original
app.route('/').put((req, res) => {
  author = req.body.author //alteramos o valor da variável somente com o parâmetro e não o json inteiro
  res.send(author)
})
*/

//DELETE
/*
app.route('/:identificador').delete((req, res) => {
  //normalmente recebe o identificador na rota
  //aqui deveríamos inserir o código para deletar algo
  res.send(req.params.identificador) //mostra o código identificador
})
*/

//Especializar 2.3 - Parâmetros nas req

//Body Params
/*
//midware
app.use(express.json())

app.route('/').post((req, res) => {
  const { nome, cidade, livros } = req.body //desmembramos os parâmetros do body em variáveis
  res.send(`Meu nome é ${nome} e moro em ${cidade}`) //usamos template string para passar o código a ser exibido conforme parâmetros recebidos
})
*/

//Route Params
/*
//capturando informações na rota e sub-rota
app.route('/').get((req, res) => res.send('oiie'))
app.route('/:variavel').get((req, res) => res.send(req.params.variavel))
app.route('/identidade/:nome').get((req, res) => res.send(req.params.nome))
*/

//Query Params
/*
//capturando informações via query que já cria as variáveis na req
app.route('/').get((req, res) => res.send(req.query.nome))
app.route('/about/user').get((req, res) => res.send(req.query))
*/
