const express = require("express")
const app = express()
const path = require('path');
const route = require("./routes/index")
const cors = require("cors");
const morgan = require("morgan");
app.use(morgan("dev"))
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));
app.use(route)
module.exports = app