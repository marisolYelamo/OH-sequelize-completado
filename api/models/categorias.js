const S= require('sequelize')
const db= require('../confdb')


class Categorias extends S.Model{}
Categorias.init({
   
    
},{sequelize:db, modelName:'categoria'})

module.exports= Categorias