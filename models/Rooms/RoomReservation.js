const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//客房预订
const RoomReservationSchema = new Schema({
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
    housingPrice: {
        type: String,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
    dateCheck: {//入住日期
        type: String,
        required: true
    },
    remarks: {
        type: String
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

module.exports = RoomReservation = mongoose.model("RoomReservation", RoomReservationSchema);