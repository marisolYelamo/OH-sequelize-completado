const express= require('express')
const app= express()
const db = require('./confdb')
const models= require('./models')
const routes= require('./routes')


app.use(express.json())

app.use('/api', routes)

db.sync().then(()=>{

    app.listen(8080,()=> console.log('servidor levantado en el puerto 8080'))

}

)
