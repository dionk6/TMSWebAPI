const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    // id: { type: String, default: function genUUID() {
    //     return uuid.v1()
    // }},
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

