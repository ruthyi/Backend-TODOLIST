const router = require ("express").Router();

router.get("/", (req,res) =>
{
  console.log("Estas dentro de una pagina ;-;")
})

module.exports = router;
