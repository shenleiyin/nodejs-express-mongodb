const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//更换房间
const HousekeepingSchema = new Schema({
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
    poomType: {//房价类型
        type: String,
        required: true
    },
    priceSpread: {//差价
        type: String,
    },
    housingRrice: {
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

module.exports = Housekeeping = mongoose.model("housekeeping", HousekeepingSchema);