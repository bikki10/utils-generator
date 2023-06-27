const express = require("express");
const router = express.Router();
// importing the currency package
const CC = require("currency-converter-lt")

router.get("/",(req,res) =>{
    res.render("index");
});

router.get("/contact",(req,re1)=>{
    res.render("contact")
})

router.get("/converter/:currency1/:currency2/:value", async(req,res) =>{
    // initializing currency package
    const {currency1, currency2, value} = req.params;
    const currencyConverter = new CC({
        from: currency1,
        to: currency2,
        amount: Number(value)
    });

    const result = await currencyConverter.convert();


    res.send(`Current Price of ${currency1} to ${currency2} is ${value}`);
});


module.exports = router;