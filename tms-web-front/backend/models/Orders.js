const {v4: uuidv4 } = require('uuid');

const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    _id:{type:String ,default:()=>{return uuidv4();}},
    address:String,
    city:String,
    postalCode:String,
    phoneNumber:String,
    email:String,
    userId:String,
    shirtName:String,
    shirtNo:String,
    shirtPrice:String,
    shirtType:String,
    firstName:String,
    lastName:String,
    cartNumber:String,
    cvv:String,
    expireDate:String,
    pinCode:String,
    updatedDate:{type:Date,default:Date.now}
});

module.exports = mongoose.model('Orders',OrderSchema);

