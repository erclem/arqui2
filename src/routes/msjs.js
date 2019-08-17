const router = require("express-promise-router")();

const { 
    index,
    insert,
    getPrimerMensaje
} = require("../controllers/msjs");

router.get("/",index);
router.post("/",insert);

router.get("/getUnique", getPrimerMensaje);


module.exports = router;