const url = 'http://localhost:5500/api'

function getUsers() {
  fetch(url)
    .then(response => response.json())
    .then(data => (renderAPIResult.textContent = JSON.stringify(data))) //pega a resposta do then anterior
    .catch(error => console.error(error))
}

function getUser(id) {
  fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userCity.textContent = data.city
      userAvatar.src = data.avatar //coloca o link do avatar como src da img
    })
    .catch(error => console.error(error))
}

function addUser(newUser) {
  fetch(url, {
    method: 'POST', //usando o método POST para enviar dados (padrão é GET)
    body: JSON.stringify(newUser), //passando o newUser como texto json
    headers: {
      'Content-type': 'application/json;charset=UTF-8' //padrão de headers
    }
  })
    .then(response => response.json())
    .then(data => (alertAPI.textContent = data)) //API já restorna texto simples
    .catch(error => console.error(error))
}

function updateUser(updatedUser, id) {
  fetch(`${url}/${id}`, {
    //precisamos de um id para ser alterado
    method: 'PUT', //usando o método PUT para alterar um usuário
    body: JSON.stringify(updatedUser), //passando o updatedUser como texto simples
    headers: {
      'Content-type': 'application/json;charset=UTF-8' //padrão de headers
    }
  })
    .then(response => response.json())
    .then(data => (alertAPI.textContent = data)) //retorno de texto simples
    .catch(error => console.error(error))
}

function deleteUser(id) {
  fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: { 'Content-type': 'application/json;charset=UTF-8' }
  })
    .then(response => response.json())
    .then(data => (alertAPI.textContent = data))
    .catch(error => console.error(error))
}

const newUser = {
  name: 'Sherlock Holmes',
  avatar: 'https://picsum.photos/200/300',
  city: 'Pindamonhangaba'
}

const updatedUser = {
  name: 'Watson Elementar',
  avatar: 'https://picsum.photos/200/300',
  city: 'Vázea Paulista'
}

//addUser(newUser) //comentar para não adicionar usuários toda vez q salvarmos

//updateUser(updatedUser, 6) //comentar para não editar toda vez

//deleteUser(7)

getUsers()
getUser(6)
