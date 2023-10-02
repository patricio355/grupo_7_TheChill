const express = require('express')
const app = express()
const session = require("express-session")
const cookies = require('cookie-parser')
const path = require('path')
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware.js');
// const multer = require('./middlewares/multerMiddleware');

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


// USANDO RUTAS
const mainRoutes = require("../src/routes/mainRoutes.js")
const usersRoutes = require("../src/routes/usersRoutes.js")
const productRoutes = require("../src/routes/productRoutes.js")
const adminRoutes = require("../src/routes/adminRoutes.js");
app.use( mainRoutes)
app.use(usersRoutes)
app.use(productRoutes)
app.use(adminRoutes)

// app.use()

// LEGACY NAVBAR
// app.get('/nav', (req,res)=>{
//     res.render(path.join(__dirname,"/views/navbarFooter.ejs"));
// });
