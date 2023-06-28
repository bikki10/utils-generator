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

app.use("/", indexRouter);



app.listen(8000,()=>{
    console.log("Server running on port 8000");
});