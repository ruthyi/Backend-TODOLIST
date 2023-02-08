const express = require('express');
const app= express();
const port=3000;
// req trae del usuario
// res reponde al usuario
const todoRoutes= require("./routes/todoRoutes");
app.use("/todos",todoRoutes );


app.listen(port, ()=>{
  console.log("mi puerto es: "+port);
})
// console.log("Hola Mundo");
