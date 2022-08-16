const S= require('sequelize')
const db= require('../confdb')


class Productos extends S.Model{

}

Productos.init({
    
},{sequelize: db , modelName:'productos'})


module.exports = Productos;