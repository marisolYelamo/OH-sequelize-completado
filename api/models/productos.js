const S= require('sequelize')
const db= require('../confdb')

/* Modelo Producto {
	nombre: string
	precio: int
	descripcion: string
	disponible: booleano = default true
 	stock: int
} */

class Productos extends S.Model{
    static sinStock(){
      return Productos.findAll({where:{stock: 0}})
    }
    
    ganancia(stock, precio){

    }
}

Productos.init({
    nombre:{
        type: S.STRING,
        allowNull: false
    },
    precio:{
        type: S.INTEGER,
        allowNull: false
    },
    desciption:{
        type: S.STRING,
       
    },
    disponible:{
        type: S.BOOLEAN,
        defaultValue:true,
        allowNull: false
    },
    stock:{
        type: S.INTEGER,
        allowNull: true
    },
},{sequelize: db , modelName:'productos'})

//metodo de clase 
// findOne, findAll, findByPk,
/* Productos.sinStock= function(){
    console.log('ACA ESTOY MARI')
 const productosSinStock= Productos.findOne({where: {nombre: 'leche' }})
 return productosSinStock
}  */
module.exports= Productos