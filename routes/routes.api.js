const express = require("express");

const router = express.Router();

router.get("/",(req,res,next) =>{
try{
    res.json({msg:"Hello from API!"});
}catch(err){
    next(err)
}
});

router.post("/contacts",(req, res, next) => {
    console.log({data: req.body});
    res.json({msg: "Thank you for submitting"});
});

router.post("/form2",(req, res, next) => {
    console.log({data: req.body});
    res.json({msg: "Thank you for submitting"});
});


module.exports = router;