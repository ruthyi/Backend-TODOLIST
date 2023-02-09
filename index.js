const express = require('express');
const mongoose= require('mongoose');
const cors =require('cors');

const app= express();
const port=3000;


const todoRoutes= require("./routes/todoRoutes");
const connectionOptions = { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false };
app.use(express.json());
app.use(cors());

const use="todolist";
const password='1234';
const dbname='todolist';

const url = `mongodb+srv://${use}:${password}@bd.y5qzq9a.mongodb.net/${dbname}?retryWrites=true&w=majority`;
mongoose.set("strictQuery", false);
mongoose.connect(url).then(()=>console.log("Conexion exitosa")).catch((err)=> console.error(err));

app.use("/todos",todoRoutes );


app.listen(port, ()=>{
  console.log("mi puerto es: "+port);
})
// console.log("Hola Mundo");
