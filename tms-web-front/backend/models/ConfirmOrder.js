const mongoose = require('mongoose');

const ConfirmOrderSchema = mongoose.Schema({
    _id:String,
    confirmedStatus:{type:Boolean,default:true},
    confirmDate:{type:Date,default:Date.now}
});

module.exports = mongoose.model('ConfirmOrder',ConfirmOrderSchema);

