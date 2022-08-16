# OH-sequelize

++++ testear con postman o thunder client++++
# iniciando
-con npm i instala todos las dependencias del package.json

-Recordá antes que nada crear una base de datos, podes llamarla ohSequelize

-npm start para levantar tu proyecto

# Hacer una RESTful API usando Node, Express y Sequelize (Postgres)
- vamos a modularizar tanto modelos como rutas, es importante que lo tengas en cuenta para requerir los modulos y organizar las carpetas ;)

-empecemos a moldear nuestra base de datos! vamos a necestar un modelo producto:
Modelo Producto {
	nombre: string
	precio: int
	descripcion: text
	disponible: booleano = default true
 	stock: int
}
-agrega una restriccion al nombre para que no se pueda repetir el mismo nombre del producto
-Crear un método de clase que diga cuántos productos hay sin stock, o no disponibles.
-Crear un método de instancia que diga cuanta ganancia podría tener con el stock disponible y precio del producto.
También tiene que tener un getter sobre el campo precio que devuelva el precio con un símbolo de $ adelante, por ejemplo, si el precio es 20 devolvería “$20” (opcional, se puede hacer con un virtual)
-Agregar un virtual  que tome el valor de 'disponible' en caso de ser false, agregar en el titulo del producto un "NO DISPONIBLE" y si es true agregarle "DISPONIBLE", por ejemplo, si el producto "Cartuchera" no está disponible quedaría: "Cartucheara NO DISPONIBLE"
- en otro archivo hacemos nuestro modelo Categoria

Modelo Categoria {
	nombre: string
}
# relaciones
Los productos pueden tener varias categorías.

# rutas
Los endpoints van a ser los siguientes:
GET /productos 
GET /productos/:id
POST /productos (tene en cuenta que al hacer e metodo post deberas contemplar la creacion de categorias para poder hacer la relacion entre categorias y productos ) 
***plus: para hacer la ruta post hay una carpeta utils con un archivo seed que tiene un arreglo de objetos! podes pegar uno por uno en tu thunder client o postman cuando testies esta ruta para corroborar que funciona y tener datos en tu base de datos para tener datos en tu base de datatos***
PUT /productos/:id
DELETE /productos/:id

#  hook
crear uno hook que verifique antes de ser creado, si el stock es igual a 0 disponible pase a ser false (recorda que pusimos que por default va a ser true)

# BONUS 
como bonus te propongo hacer las  2 rutas  para utilizar los metodos y clase y de instancia y ver como funcionan!
pista: ambos pueden ser metodos get 
Además GET /productos puede incluir un query de categorías por ejemplo
GET /productos?categoria=libros
Debería traer solo los productos que tengan la categoría libros
====================================
