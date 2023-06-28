const express = require("express");

const router = express.Router();

router.get("/",(req,res,next) =>{
try{
    //Database query goes here
    //utils query
    res.json({msg:"Hello from API!"});
}catch(err){
    next(err)
}
});

module.exports = router;