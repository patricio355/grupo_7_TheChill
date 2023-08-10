const express = require('express')
const app = express()
const path = require('path')

app.use(express.static("public"));

app.listen(8000,console.log('Listening on port 8000'));

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,"/views/index.html"));
});
app.get('/nav', (req,res)=>{
    res.sendFile(path.join(__dirname,"/views/navbarFooter.html"));
});
app.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname,"/views/login.html"));
});
app.get('/productodetalle', (req,res)=>{
    res.sendFile(path.join(__dirname,"/views/productDetail.html"));
});