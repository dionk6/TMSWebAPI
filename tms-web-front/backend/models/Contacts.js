const {v4: uuidv4 } = require('uuid');

const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    _id:{type:String ,default:()=>{return uuidv4();}},
    firstName:String,
    lastName:String,
    subject:String,
    email:String,
    message:String,
    updatedDate:{type:Date,default:Date.now}
});

module.exports = mongoose.model('Contacts',ContactSchema);

