const express = require("express");

const router = express.Router();

router.get("/",(req,res) =>{
    res.send({msg:"Hello from UI!"});
});

// router.get("/converter/:currency1/:currency2/:value",(req,res) =>{
//     const {currency1, currency2, value} = req.params;
//     // call currency package
//     // run the code
//     // store the result in a variable called result
//     const result ="";



//     res.send(`Hello ${result}`);
// });


module.exports = router;