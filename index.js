const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const ejs = require("ejs");

const app = express();

const indexRouter = require("./routes");

// Setting up the thirdparty middleware
app.use(morgan("short"));
app.use(cors());

// Setting up the EJS Template

app.set("view engine","ejs");
app.set("views","./views");


//Serving the static file
app.use(express.static("public"));

// Trying to test the application level error handler
app.get("/broken",(req,res)=>{
    throw new Error("Broken");
});

app.use("/", indexRouter);

//Application Level Error Handler
app.use((err,req,res,next)=>{
    console.error(err);
    res.status(500).send("Something went wrong");
})

app.listen(8000,()=>{
    console.log("Server running on port 8000");
});