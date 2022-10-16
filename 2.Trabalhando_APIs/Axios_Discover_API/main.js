const url = 'http://localhost:5500/api'

function getUsers() {
  axios
    .get(url)
    .then(response => {
      APIResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

function addNewUser(newUser) {
  axios
    .post(url, newUser)
    .then(response => {
      console.log(response)
    })
    .catch(error => console.error(error))
}

function getUser(id) {
  axios
    .get(`${url}/${id}`)
    .then(response => {
      const data = response.data
      userName.textContent = data.name
      userCity.textContent = data.city
      userID.textContent = data.id
      userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

function updateUser(id, updatedUser) {
  axios
    .put(`${url}/${id}`, updatedUser)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

function deleteUser(id) {
  axios
    .delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

const newUser = {
  name: 'Sherlock Holmes',
  avatar: 'https://picsum.photos/200/300',
  city: 'Salvador'
}

const updatedUser = {
  name: 'Rodrigo Faro',
  avatar: 'https://picsum.photos/200/300',
  city: 'São Paulo'
}

getUsers()
getUser(3)
//updateUser(6, updatedUser)
//deleteUser(2)
//addNewUser(newUser)
