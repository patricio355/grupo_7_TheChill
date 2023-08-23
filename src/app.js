const express = require('express')
const app = express()
const path = require('path')

// USANDO RUTAS

const mainRoutes = require("../src/routes/mainRoutes.js")
const usersRoutes = require("../src/routes/usersRoutes.js")
const productRoutes = require("../src/routes/productRoutes.js")
const adminRoutes = require("../src/routes/adminRoutes.js")
app.use(mainRoutes)
app.use(usersRoutes)
app.use(productRoutes)
app.use(adminRoutes)


// USANDO ARCHIVOS ESTATICOS
app.use(express.static("public"));

// USO DE EXPRESS
app.set("view engine", "ejs");
app.set("views", "./src/views");

app.listen(8000,console.log('Listening on port 8000'));


// LEGACY NAVBAR
// app.get('/nav', (req,res)=>{
//     res.render(path.join(__dirname,"/views/navbarFooter.ejs"));
// });
