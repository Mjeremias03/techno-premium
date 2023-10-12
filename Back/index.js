const { sequelize } = require("./src/database");
const app = require("./src/server");
require('dotenv').config()
const {DB_PORT} = process.env
app.listen(3001, ()=>{
  sequelize.sync({force:true})
  console.log(`3001`)
})