const express = require ('express')
const {products} = require("./data.js")

const PORT = process.env.PORT || 8080;

const app = express();



app.get('/', (req, res) => {
    res.send('Esta es la pagina de inicio')
})



app.get('/api/productos', (req, res) => {
    let response = products
    
    
    if(req.query.title){
        const newProducts = products.filter(product => {
            return product.title == req.query.title;
        })

        response = newProducts
    }

    if(req.query.maxPrice){
        const newProducts = products.filter(product => {
            return product.price <= req.query.maxPrice;
        })

        response = newProducts
    }

    res.json(response);
})



app.post('/api/productos', (req, res) => {
    const ids = products.map(object => {
        return object.id;
    });
    const max = Math.max(...ids);
    req.query.id = max + 1
    req.query.price = Number(req.query.price)
    
    products.push(req.query)
    res.json(products)
})



app.delete('/api/productos/:id', (req, res) => {
    const newProducts = products.filter(product => {
        return product.id != req.params.id;
    })
    res.json(newProducts);
})



app.put('/api/productos/:id', (req, res) => {
    const product = products.filter(product => {
        req.query.title ? product.title = req.query.title : null
        req.query.price ? product.price = req.query.price : null
        return product.id == req.params.id;
    })

    res.json(product);
})



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
})




