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



/*const Product = sequelize.define("Product", {
    id:{
        type: DataTypes.BIGINT,
        primaryKey : true,
        autoIncrement: true,
    },
    title:{
        type: DataTypes.STRING,
    },
    metaTitle:{
        type: DataTypes.TEXT,
    },
    type:{
        type: DataTypes.SMALLINT,
    },
    sku:{
        type: DataTypes.STRING,
    },
    price:{
        type: DataTypes.FLOAT,
    },
    size:{
        type: DataTypes.STRING,
    },
    colour:{
        type: DataTypes.STRING,
    },
    image:{
        type: DataTypes.STRING,
    },
    discount:{
        type: DataTypes.FLOAT,
    },
    quantity:{
        type: DataTypes.SMALLINT,
    },
    shop:{
        type: DataTypes.BOOLEAN,
    },
    createdAt:{
        type: DataTypes.DATE,
    },
    updatedAt:{
        type: DataTypes.DATE,
    },
    publishedAt:{
        type: DataTypes.DATE,
    },
    startsAt:{
        type: DataTypes.DATE,
    },
    endsAt:{
        type: DataTypes.DATE,
    },
    content:{
        type: DataTypes.TEXT,
    },
    userId:{
        type: DataTypes.BIGINT,
        foreignKey: true,
        unique: true,
    }
},*/

db.Product.create({
    title: "pnatalon ajustado",
    price: "1000",
    size: "XXL",
    discount: "5",
    colour: "rojo",
}) 
.then((result) => console.log(result))
.catch((error) => console.log(error));