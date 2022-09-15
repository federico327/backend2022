const express = require ('express');
const {products} = require('./data')


const PORT = process.env.PORT || 8080;
//createserver
const app = express();

app.get('/',(req,res) =>{
    res.send('esta es la pagina de inicio')
});

app.get('/productos',(req,res) =>{
    let response = products
    res.json(response)
});


app.get('/productoRandom', (req, res) => {
    console.log (products.length)
    console.log (Math.random()*products.length)
    console.log (Math.floor(Math.random()*products.length))
    res.json(products[Math.floor(Math.random()*products.length)]);
})



const connectedServer = app.listen(PORT, () => {
    console.log (`Server is up and running on port ${PORT}`)
})

connectedServer.on('error', (error) => {
    console.log(error.message); 
});




