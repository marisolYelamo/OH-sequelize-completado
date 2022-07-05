const express = require("express");
const route = express.Router();
const { Productos, Categorias } = require("../models");

/* GET /productos
GET /productos/:id
POST /productos
PUT /productos/:id
DELETE /productos/:id
 */

route.get("/productos", (req, res) => {
  Productos.sinStock().then((productos) => res.send(productos));
});

route.get("/", (req, res) => {
  Productos.findAll().then((productos) => res.send(productos));
});

route.get("/:id", (req, res) => {
  Productos.findOne({ where: { id: req.params.id } }).then((producto) =>
    res.send(producto)
  );
});

route.put("/edit/:id", (req, res) => {
  Productos.update(req.body,
    {
      where: {
        nombre: "leche",
      },
      returning: true,
    }
  ).then((productos) => {
    let [rows, updateProduct] = productos;
    res.send(updateProduct[0]);
  });
}); 

route.post("/create", (req, res) => {
  Productos.create(req.body)
    .then((producto) => res.send(producto))
    .catch((err) => console.log(err));
});

// router.post("/create", async(req,res)=>{
 //try{ 
// const products= await Productos.create(req.body)
//const categories= await Categories.findOne({where: {id:req.body.id}})
// productos.addCatories(categories)
// res.send(products)
//}
//
//catch(err){}
//})
//
//
route.delete("/delete/:id", (req, res,next)=>{
  Productos.destroy({where:{id: req.params.id}})
  .then(()=> res.sendStatus(204))
  .catch((err)=> console.log(err))
})
route.delete("/delete/:id", async (req, res)=>{
  try{
    await Productos.destroy({where:{id: req.params.id}})
    res.sendStatus(204)
  }catch(err){
    console.log(err)
   next(err)
  }
})


module.exports = route;
