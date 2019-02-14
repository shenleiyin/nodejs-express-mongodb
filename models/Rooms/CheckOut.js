const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//客人退房
const CheckOutSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    name: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    identity: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    roomNumber: {
        type: String,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
    cashPledge: {
        type: String,
        required: true
    },
    dateCheck: {
        type: String,
        required: true
    },
    departureDate: {
        type: String,
        required: true
    },
    depositRefund: {
        type: String
    },
    remarks: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    receptionist: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = CheckOut = mongoose.model("checkOut", CheckOutSchema);