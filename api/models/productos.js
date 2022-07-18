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
        
    },
    precio:{
        type: S.INTEGER,
        get(){
          let precio=  this.getDataValue('precio')
          return `$${precio}`
        }
        
    },
    descripcion:{
        type: S.STRING,
       
    },
    disponible:{
        type: S.BOOLEAN,
        defaultValue:true,
        
    },
    stock:{
        type: S.INTEGER,
        
    },
},{sequelize: db , modelName:'producto'})


Productos.beforeCreate((producto)=>{
    if(producto.stock== 0){
        producto.disponible= false
    }
    if(!producto.disponible){ 
   producto.nombre= `${producto.nombre} NO DISPONIBLE`
  
}}
)

module.exports= Productos