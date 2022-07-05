const express= require('express')
const app= express()         //express
const db = require('./confdb') //sequelize 
const models= require('./models')//sequelize
const routes= require('./routes')//express
const bodyParser = require('body-parser')

app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', routes)

db.sync({force:false}).then(()=>{
    app.listen(8080,()=> console.log('servidor levantado en el puerto 8080'))
})



