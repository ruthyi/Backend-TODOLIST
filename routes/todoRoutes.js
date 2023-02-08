const router=require("express").Router();
const Todo=require("../models/todo");

router.get("/", (req, res )=> { console.log("Hola")
  Todo.find((err, result) => {
    if(err) throw new Error(err);
    console.log(result);
    });
});

router.post("/new", (req, res )=> {
  console.log(req,body)

});


module.exports=router;
