const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./dbConnection');
const contacts = require('../routes/contacts');
const orders = require('../routes/orders');
const confirmorder = require('../routes/confirmOrder');
const emailSubscriptions = require('../routes/emailSubscriptions');

mongoose.Promise = global.Promise; 
mongoose.connect(config.db);
const app = express();
app.use(bodyParser.json());
app.use(cors()); 
app.use('/contacts',contacts);
app.use('/orders',orders);
app.use('/confirmOrder',confirmorder);
app.use('/emailSubscriptions',emailSubscriptions);

var port = process.env.PORT || 4000;

app.listen(port,function() {
    console.log("Node js Serveri ne Portin" ,port);
})