const url = "http://localhost:5500/api"

function getUsers() {
  axios.get(url)
    .then(response => {
      apiResult.textContent = JSON.stringify(response.data.users)
    })
    .catch(error => console.error(error))
}
function addNewUser() {
  axios.post(url)
    .then(response => {
      console.log(response)
    })
    .catch(error => console.error(error))
}

function getUser(id) {
  axios.get(`${url}/${id}`)
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
  axios.put(`${url}/${id}`, updatedUser)
    .then(response => {
      console.log(response)
    })
    .catch(error => console.error(error))
}

function deleteUser(id) {
  axios.delete(`${url}/${id}`)
    .then(response => {
      console.log(response)
    })
    .catch(error => console.error(error))
}
const newUser = {
  name: 'Kayke Bauer',
  avatar: 'http://picsum.photos/200/300',
  city: 'Louveira'
}
const updatedUser = {
  name: "Luiz Eduardo",
  avatar: "http://picsum.photos/200/300",
  city: 'Sorocaba'
}
getUsers()
getUser(3)
// updateUser(5, updatedUser)
// addNewUser(newUser)
deleteUser(2)