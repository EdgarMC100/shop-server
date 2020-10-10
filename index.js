'use strict'

const express = require('express');
const orderRoutes = require('./routers/orders_routes');
const bodyParser = require("body-parser");
const config = require("./config");

let app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use(orderRoutes);
app.listen(config.port,()=>{console.log(`API REST running at http://localhost:${config.port}`)});
