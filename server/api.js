var express = require('express');
var products = require('./controllers/products.ctrl');
var services = require('./controllers/services.ctrl');
var hairstyles = require('./controllers/hairstyles.ctrl');
var customers = require('./controllers/customers.ctrl');
var purchases = require('./controllers/purchases.ctrl');
var blog = require('./controllers/blog.ctrl');


var router = express.Router();
router.use('/products', products);
router.use('/services', services);
router.use('/hairstyles', hairstyles);
router.use('/customers', customers);
router.use('/purchases', purchases);
router.use('/blog', blog);


module.exports = router;
