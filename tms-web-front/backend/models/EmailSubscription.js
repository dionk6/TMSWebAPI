const {v4: uuidv4 } = require('uuid');

const mongoose = require('mongoose');

const EmailSubscriptionSchema = mongoose.Schema({
    _id:{type:String ,default:()=>{return uuidv4();}},
    email:String,
    subscriptionDate:{type:Date,default:Date.now}
});

module.exports = mongoose.model('EmailSubscriptions',EmailSubscriptionSchema);

