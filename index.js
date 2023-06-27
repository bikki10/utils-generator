const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

const indexRouter = require("./routes");


app.use(morgan("short"));
app.use(cors());
app.use("/", indexRouter);

app.listen(8000,()=>{
    console.log("Server running on port 8000");
});