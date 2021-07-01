const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    subject:String,
    email:String,
    message:String,
    updatedDate:{type:Date,default:Date.now}
});

module.exports = mongoose.model('Contacts',ContactSchema);

