const express = require("express");

const app = express();

const indexRouter = require("./routes");

//middleware
app.use((req,res,next) =>{
    console.log("Request received at" + Date.now());
    next();
});

app.use("/", indexRouter);

app.listen(8000,()=>{
    console.log("Server running on port 8000");
});