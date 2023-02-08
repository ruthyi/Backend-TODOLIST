const express = require('express');
const app= express()
const port=3000
// req trae del usuario
// res reponde al usuario
const todoRoutes = require("./routes/todoRoutes");
app.use("/todos", todoRoutes);

app.get("/", (req, res )=> {
  res.send("Rama Ximena");
})

app.listen(port, ()=>{
  console.log("mi puerto es: "+port);
})
// console.log("Hola Mundo");
