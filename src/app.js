const express = require('express')
const app = express()
const path = require('path')

app.use(express.static("public"));

app.listen(8000,console.log('Listening on port 8000'));

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,"/views/index.html"));
});