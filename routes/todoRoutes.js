const router=require("express").Router();

router.get("/", (req, res )=> {
  console.log("Estas adentro de una pagina");
})

module.exports=router;
