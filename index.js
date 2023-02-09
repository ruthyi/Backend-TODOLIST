const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

const todoRoutes = require('./routes/todoRoutes');
const connectionOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
};
app.use(express.json());
const use = 'XimenaVelasco';
const password = '123';
const dbname = 'todolist';
const url = `mongodb+srv://${use}:${password}@cluster0.q8k7itt.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.set("strictQuery", false);
mongoose.connect(url).then(()=>console.log("Conexion exitosa")).catch((err)=> console.error(err));

app.use("/todos",todoRoutes );


app.listen(port, ()=>{
  console.log("mi puerto es: "+port);
})
// console.log("Hola Mundo");
