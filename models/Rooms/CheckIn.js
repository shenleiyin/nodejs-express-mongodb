const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// 客人入住
const RoomSchema = new Schema({
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
    cashPledge: {//押金
        type: String,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
    dateCheck: {
        type: String,
        required: true
    },
    outDate: {//离店日期
        type: String,
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

module.exports = Room = mongoose.model("room", RoomSchema);



