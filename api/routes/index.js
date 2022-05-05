const express= require('express')
const route= express.Router()
const {Productos, Categorias}= require('../models')

/* GET /productos
GET /productos/:id
POST /productos
PUT /productos/:id
DELETE /productos/:id
 */



route.get('/',(req,res)=>{
Productos.findAll().then((productos)=>res.send(productos))
})

route.get('/:id',(req,res)=>{
Productos.findOne({where: { id: req.params.id}}).then((producto)=> res.send(producto))
})

route.put('/edit/:id', (req, res)=>{
    Productos.update({nombre: 'leche entera'}, {where:{
    nombre:'leche'
    },returning: true }).then((productos)=> {
        let [rows, updateProduct]= productos 
        res.send(updateProduct[0])})
})// [1,[{etc}]][1] = [{etc}] [0]

/*  route.get('/productos', (req, res)=>{
    console.log('ACA X $%$%%&/848484904')
    Productos.sinStock()
})  */

route.post('/', (req, res)=>{
    Productos.create({nombre: 'leche',
        precio: 30,
        descipcion:'baja en grasa',
        disponible:true,
         stock:2})
    .then((producto)=> res.send(producto))
    .catch((err)=> console.log(err))
})

module.exports= route