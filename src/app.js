const express = require('express')
const app = express()
const session = require("express-session")
const cookies = require('cookie-parser')
const path = require('path')
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware.js');
// const multer = require('./middlewares/multerMiddleware');
const cors = require('cors');
app.use(express.urlencoded({extended: false}));

// USANDO ARCHIVOS ESTATICOS
app.use(express.static("public"));
app.use(session({
    secret: "hola soy un secreto",
    resave: false,
    saveUninitialized: false,
}));

app.use(cookies());
app.use(userLoggedMiddleware);

app.listen(8000,console.log('Listening on port 8000'));
// USO DE EXPRESS
app.set("view engine", "ejs");
app.set("views", "./src/views");

process.env.TZ = 'America/Argentina/Buenos_Aires';
// USANDO RUTAS
const mainRoutes = require("../src/routes/mainRoutes.js")
const usersRoutes = require("../src/routes/usersRoutes.js")
const productRoutes = require("../src/routes/productRoutes.js")
const adminRoutes = require("../src/routes/adminRoutes.js");

app.use( mainRoutes)
app.use(usersRoutes)
app.use(productRoutes)
app.use(adminRoutes)

app.use(cors({ origin: 'http://localhost:5173' }));



//rutas 
const apiUserRoutes= require('./routes/api/apiUser.js');

app.use('/api',apiUserRoutes);


const apiCategoryRoutes= require('./routes/api/apiCategory.js');

app.use('/api',apiCategoryRoutes);

// app.use()

// LEGACY NAVBAR
// app.get('/nav', (req,res)=>{
//     res.render(path.join(__dirname,"/views/navbarFooter.ejs"));
// });

//Aquí llamo a la ruta de las api de products
const apiProductRouter = require('./routes/api/apiProduct')
//Aquí llamo a la ruta de las api de actors
// const apiGenresRouter = require('./routes/api/genres')
//Aquí llamo a la ruta de las api de actors
// const apiActorsRouter = require('./routes/api/actors')



//Aquí creo la colección de mis recursos del ecommerce (APIs)
app.use('/api/products',apiProductRouter);
// app.use('/api/actors',apiActorsRouter);
// app.use('/api/genres',apiGenresRouter);
