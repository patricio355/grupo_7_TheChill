const db = require("./database/models")

// ....... COMPROBANDO LA CONEXION CON LA BASE DE DATOS ........ 

db.Transaction.findAll({raw: true}).then((result)=> console.log(result));

// db.User.findOne({
//         where: {
//             first_name: "Leo"
//         },
//         raw: true,
//     }
// ).then((result)=> console.log(result));

// db.Product.findByPK(21, {raw: true}).then((result)=> console.log(result));
