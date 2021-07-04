const { v4: uuidv4 } = require('uuid');

const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    _id: { type: String, default: () => { return uuidv4(); } },
    address: String,
    city: String,
    postalCode: String,
    phoneNumber: String,
    email: String,
    userId: String,
    shirtName: String,
    shirtNo: String,
    shirtPrice: String,
    shirtType: String,
    firstName: String,
    lastName: String,
    cartNumber: String,
    cvv: String,
    expireDate: String,
    pinCode: String,
    updatedDate: {
        type: String, default: () => {
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            let yyyy = today.getFullYear();

            today = yyyy + '-' + mm + '-' + dd;
            return today;
        }
    }
});

module.exports = mongoose.model('Orders', OrderSchema);

