const express = require('express');
const api_app = express();
const {products, people} = require('./mock_db');
const logger = require('./logger');
const authorize = require('./authorize');
const morgan = require('morgan');
api_app.listen(5000, () => {
    console.log('server is listening on port 5000');
});
api_app.use([authorize, logger, morgan('tiny')]);
api_app.get('/', (req, res) => {
    res.send('<h1>Home page</h1><a href="/api/products">Products</a><br>')
})

api_app.get('/api/people', (req, res) => {
    return res.status(200).json({success: true, data: people});
});
api_app.get('/api/products', (req, res) => {
    let sortedProducts = products.map((product) => {
        const {id, name, image, price} = product;
        const url = `http://${req.hostname}:${5000}/api/products/${id}`
        return {id, name, image, price, url}
    })

    const {search, limit} = req.query;

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }
    if (sortedProducts.length >= 1) {
        return res.status(200).json(sortedProducts);
    } else {
        //return res.status(200).send('No products match your search!');
        return res.status(200).json({success: true, data: []})
    }
});

api_app.get('/api/products/:productID', (req, res) => {
    const {productID} = req.params;
    const singleProduct = products.find((product) => product.id === Number(productID))
    if (!singleProduct) {
        return res.status(404).send('Product Does Not Exist');
    }
    return res.json(singleProduct);
})
