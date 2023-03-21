const express = require('express');
const app = express();

app.set("view engine", "ejs");

// app.get("/", function (req, res) {
//   const items = [
//     {
//       title: "D",
//       message: " esenvolvedor aplicações/ serviços de forma fácil"
//     },
//     {
//       title: "E",
//       message: " js usa JavaScript para renderizar HTML"
//     },
//     {
//       title: "M",
//       message: " uito fácil de usar"
//     },
//     {
//       title: "A",
//       message: " morzinho"
//     },
//     {
//       title: "I",
//       message: " nstall ejs"
//     },
//     {
//       title: "S",
//       message: " intaxe simples"
//     }
//   ]

//   const subtitle = " Uma linguagem de modelagem para criação de páginas HTML utilizando JavaScript"
//   res.render("pages/index", {
//     qualitys: items,
//     subtitle: subtitle,
//   });
// })
app.get("/form", function (req, res) {
  res.render("pages/indexEx4");
})
app.get("/resForm", function (req, res) {
  res.render("pages/resEx4");
})

app.listen(8080);
console.log("Rodando")