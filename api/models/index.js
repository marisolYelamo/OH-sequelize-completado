const Productos= require('./productos')
const Categorias= require('./categorias')
Productos.hasMany(Categorias)
//hasMany
//hasOne
//belongTo
module.exports= {Productos, Categorias}