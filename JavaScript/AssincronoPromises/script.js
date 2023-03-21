//Callback function
// function imprimirDado(dado) {
//   console.log('Outras tarefas')
//   console.log(dado())
// }
// imprimirDado(function () {
//   return 'Olá mundo'
// })

//SetTimeout Function
// setTimeout(function () {
//   console.log('depois de 1s')
// }, 1000)


// const https = require('https')
// const API = 'https://jsonplaceholder.typicode.com/users?_limit=2'
// https.get(API, res => {
//   console.log(res.statusCode)
// })
// console.log('Conectando API')


//Promise
// let aceitar = false
// console.log('pedir uber')
// const promessa = new Promise((resolve, reject) => {
//   if (aceitar) {
//     return resolve('pedido aceito"')
//   }
//   return reject('pedido negado!')
// })
// promessa
//   .then(result => console.log(result))
//   .catch(erro => console.log(erro))
//   .finally(() => console.log('Finalizado'))
// console.log('aguardando')



//codeSandbox
// fetch("https://api.github.com/users/maykbrito")
//   .then((response) => response.json())
//   .then(data => fetch(data.repos_url))
//   .then(res => res.json())
//   .then(d => console.log(d))
//   .catch(err => console.log(err))


// Promessas com axios

// import axios from "axios";

// axios
//   .get("https://api.github.com/users/maykbrito")
//   .then((res) => {
//     const user = res.data;
//     return axios.get(user.repos_url)
//   })
//   .then(repos => console.log(repos.data))
//   .catch((error) => console.log(error));

// //or

// axios
//   .get("https://api.github.com/users/maykbrito")
//   .then((res) => axios.get(res.data.user.repos_url))
//   .then(repos => console.log(repos.data))
//   .catch((error) => console.log(error));


// Promise.all([
//   axios.get('https://api.github.com/users/maykbrito'),
//   axios.get('https://api.github.com/users/maykbrito/repos')
// ])
//   .then(responses => {
//     console.log(responses[0].data.login)
//     console.log(responses[1].data.length)
//   })
//   .catch(err => console.log(err.message))


// const promessa = new Promise(function (resolve, reject) {
//   return resolve('ok')
// })
// async function start() {
//   try {
//     const result = await promessa
//     console.log(result)
//   } catch (e) {
//     console.log(e)
//   } finally {
//     console.log('rodar sempre')
//   }
// }

// start()

// import axios from "axios";

// Promise.all([
//   axios.get('https://api.github.com/users/maykbrito'),
//   axios.get('https://api.github.com/users/maykbrito/repos')
// ])
// .then( responses => {
//     console.log(responses[0].data.login)
//     console.log(responses[1].data.length)
// })
// .catch ( err => console.log(err.message))

// async function start() {
//   const url = "https://api.github.com/users/maykbrito";
//   const user = await fetch(url).then((r) => r.json());
//   const userRepos = await fetch(user.repos_url).then((r) => r.json());
//   console.log(userRepos);
// }
// start().catch((error) => console.log(error));



//Melhor jeito

// async function fetchRepos() {
//   try {
//     const url = "https://api.github.com/users/maykbrito";
//     const user = await axios.get(url);
//     const repos = await axios.get(user.data.repos_url);
//     console.log(repos.data);
//   } catch (e) {
//     console.log(e);
//   }
// }
// fetchRepos();
