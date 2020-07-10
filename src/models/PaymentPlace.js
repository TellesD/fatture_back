const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaymentPlaceSchema = new Schema({
    salon_Id: { type: Number, required: true, unique: false },
    client: { type: String, required: true, unique: false },
    service_group: { type: String, required: true, unique: false },
    service: { type: String, required: true, unique: false },
    price: { type: Number, required: true, unique: false },
    created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Pay', PaymentPlaceSchema);

