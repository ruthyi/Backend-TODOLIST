const express = require('express');
const app= express()
const port=3000
// req trae del usuario
// res reponde al usuario
app.get("/", (req, res )=> {
  res.send("Rama Ximena");
})

app.listen(port, ()=>{
  console.log("mi puerto es: "+port);
})
// console.log("Hola Mundo");
