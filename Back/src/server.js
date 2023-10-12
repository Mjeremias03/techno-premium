const express = require("express")
const app = express()
const route = require("./routes/index")
const cors = require("cors");
const morgan = require("morgan");
app.use(morgan("dev"))
app.use(express.json())
app.use(cors())

app.use(route)
module.exports = app