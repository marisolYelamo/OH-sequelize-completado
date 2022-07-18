const express = require("express");
const route = express.Router();
const { Productos, Categorias } = require("../models");

route.put("/edit/:id", (req, res) => {
  Productos.update(req.body, {
    where: {
      id: req.params.id,
    },
    returning: true,
  }).then((productos) => {
    let [rows, updateProduct] = productos;
    res.send(updateProduct[0]);
  });
});

route.get("/", (req, res) => {
  if (req.query.categoria) {
    Categorias.findOne({
      where: { nombre: req.query.categoria },
      include: { model: Productos },
    }).then((categoria) => {
      res.send(categoria);
    });
  }
  Productos.findAll().then((productos) => res.send(productos));
});

route.get("/:id", (req, res) => {
  Productos.findOne({ where: { id: req.params.id } }).then((producto) =>
    res.send(producto)
  );
});

route.get("/sin/stock", (req, res) => {
  Productos.sinStock().then((productos) => res.send(productos[1]));
});

route.get("/ganancia/:id", (req, res) => {
  Productos.findOne({ where: { id: req.params.id } }).then((product) => {
    let ganancia = product.ganancia();
    res.send({ ganancia: ganancia });
  });
});

route.post("/", (req, res) => {
  const { categoria } = req.body;
  Categorias.findOrCreate({ where: { nombre: categoria } }).then((finds) => {
    const categorias = finds[0];
    Productos.create(req.body)
      .then((producto) => producto.setCategoria(categorias))
      .then((productos) => res.send(productos));
  });
});


route.delete("/:id", (req, res) => {
  Productos.destroy({ where: { id: req.params.id } }).then(() =>
    res.sendStatus(202)
  );
});


module.exports = route;
