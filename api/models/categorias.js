const S= require('sequelize')
const db= require('../confdb')


class Categorias extends S.Model{}
Categorias.init({
    nombre:{
        type: S.STRING
    }
},{sequelize:db, modelName:'categoria'})

module.exports= Categorias