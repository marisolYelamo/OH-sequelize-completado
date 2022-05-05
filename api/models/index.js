const Productos= require('./productos')
const Categorias= require('./categorias')
Categorias.hasMany(Productos)
//hasMany
//hasOne
//belongTo
module.exports= {Productos, Categorias}