const express = require("express");
const router = express.Router();
// importing the currency package
const CC = require("currency-converter-lt")

router.get("/",(req,res) =>{
    res.render("index");
});

router.get("/aboutus",(req,res) =>{
    res.render("aboutus");
});

router.get("/contact",(req,res) =>{
    res.render("contact");
});

router.get("/login",(req,res) =>{
    res.render("login");
});

router.get("/signup",(req,res) =>{
    res.render("signup");
});


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