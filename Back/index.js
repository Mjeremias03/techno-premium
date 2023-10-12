const { sequelize } = require("./src/database");
const app = require("./src/server");
const PORT = 3001;

app.listen(PORT, ()=>{
  sequelize.sync({force:true})
  console.log(`listenen ${PORT}`)
})