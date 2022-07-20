const S= require('sequelize')
const db= require('../confdb')


class Productos extends S.Model{
    static sinStock(){
      const products= Productos.findAndCountAll({where:{
           stock:0
       }})
       return products
    } 
    ganancia(){
        let precio=this.dataValues.precio
        let stock= this.dataValues.stock
     return stock * precio
    }
}

Productos.init({
    nombre:{
        type: S.STRING,
        unique:true
    },
    precio:{
        type: S.INTEGER,
        get(){
          let precio=  this.getDataValue('precio')
          return `$${precio}`
        }
        
    },
    descripcion:{
        type: S.TEXT,
       
    },
    disponible:{
        type: S.BOOLEAN,
        defaultValue:true,
        
    },
    stock:{
        type: S.INTEGER,
        
    },
    estado:{
        type: S.VIRTUAL,
        get(){
            let boolean = this.dataValues.disponible
            console.log(boolean)
           return boolean ? `${this.dataValues.nombre} DISPONIBLE`:`${this.dataValues.nombre} NO DISPONIBLE`
        }
    }
},{sequelize: db , modelName:'producto'})

module.exports = Productos;