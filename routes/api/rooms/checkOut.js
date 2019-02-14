const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const User = require("../../../models/User");
const CheckOut = require("../../../models/Rooms/CheckOut");
const validateCheckOutInput = require("../../../validation/checkout");


// $route  GET /api/rooms/checkout/test
// @desc   返回的请求的json数据
// @access public
router.get("/test", (req, res) => {
    console.log(1212)
    res.json({ msg: "profile works" })
})

// $route  GET /api/rooms/checkout
// @desc   获取当前登录用户的个人信息
// @access private
router.get("/", passport.authenticate('jwt', { session: false }), (req, res) => {
    const errors = {};
    CheckOut.findOne({ user: req.user.id })
        .populate('user', ["name", "email", "avatar"])
        .then(user => {
            if (!user) {
                errors.CheckIn = "该用户不存在";
                return res.status(404).json(errors)
            }
            res.json(user)
        })
        .catch(err => res.status(404).json(err))
})

// $route  POST /api/rooms/checkout
// @desc   创建客人入住信息接口
// @access private
router.post("/", passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateCheckOutInput(req.body);
    // 判断isValid是否通过
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const roomFields = {};
    roomFields.user = req.user.id;
    if (req.body.name) roomFields.name = req.body.name;
    if (req.body.sex) roomFields.sex = req.body.sex;
    if (req.body.state) roomFields.state = req.body.state;
    if (req.body.identity) roomFields.identity = req.body.identity;
    if (req.body.location) roomFields.location = req.body.location;
    if (req.body.roomNumber) roomFields.roomNumber = req.body.roomNumber;
    // if (req.body.housingPrice) roomFields.housingPrice = req.body.housingPrice;
    if (req.body.paymentMethod) roomFields.paymentMethod = req.body.paymentMethod;
    if (req.body.cashPledge) roomFields.cashPledge = req.body.cashPledge;
    if (req.body.dateCheck) roomFields.dateCheck = req.body.dateCheck;
    if (req.body.departureDate) roomFields.departureDate = req.body.departureDate;
    if (req.body.remarks) roomFields.remarks = req.body.remarks;
    if (req.body.phone) roomFields.phone = req.body.phone;
    if (req.body.receptionist) roomFields.receptionist = req.body.receptionist;

    new CheckOut(roomFields).save().then(rooms => {
        res.json(rooms)
    })

})


// $route  POST /api/rooms/checkout/edit
// @desc   编辑客人入住信息接口
// @access private
router.post("/edit/:id", passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateCheckOutInput(req.body);
    // 判断isValid是否通过
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const roomFields = {};
    roomFields.user = req.user.id;
    if (req.body.name) roomFields.name = req.body.name;
    if (req.body.sex) roomFields.sex = req.body.sex;
    if (req.body.state) roomFields.state = req.body.state;
    if (req.body.identity) roomFields.identity = req.body.identity;
    if (req.body.location) roomFields.location = req.body.location;
    if (req.body.roomNumber) roomFields.roomNumber = req.body.roomNumber;
    // if (req.body.housingPrice) roomFields.housingPrice = req.body.housingPrice;
    if (req.body.paymentMethod) roomFields.paymentMethod = req.body.paymentMethod;
    if (req.body.cashPledge) roomFields.cashPledge = req.body.cashPledge;
    if (req.body.dateCheck) roomFields.dateCheck = req.body.dateCheck;
    if (req.body.departureDate) roomFields.departureDate = req.body.departureDate;
    if (req.body.remarks) roomFields.remarks = req.body.remarks;
    if (req.body.phone) roomFields.phone = req.body.phone;
    if (req.body.receptionist) roomFields.receptionist = req.body.receptionist;

    CheckOut.findOneAndUpdate({ _id: req.params.id }, { $set: roomFields }, { new: true })
        .then(room => res.json(room))

})

// $route  GET /api/rooms/checkout/all
// @desc   获取所有人的个人信息
// @access private
router.get("/all", passport.authenticate('jwt', { session: false }), (req, res) => {
    const errors = {};
    CheckOut.find()
        // .populate('user', ["name", "email", "avatar"])
        .then(user => {
            if (!user) {
                errors.CheckOut = "该用户不存在";
                return res.status(404).json(errors)
            }
            res.json(user)
        })
        .catch(err => res.status(404).json(err))
})

// $route  GET /api/rooms/checkout/:id
// @desc   获取单个人的个人信息
// @access private
router.get("/:id", passport.authenticate('jwt', { session: false }), (req, res) => {
    const errors = {};
    CheckOut.findOne({ _id: req.params.id })
        // .populate('user', ["name", "email", "avatar"])
        .then(user => {
            if (!user) {
                errors.CheckIn = "该用户不存在";
                return res.status(404).json(errors)
            }
            res.json(user)
        })
        .catch(err => res.status(404).json(err))
})


// $route  DELETE /api/rooms/checkin/delete/:id
// @desc   删除入住客人信息接口
// @access Private
router.delete("/delete/:id", passport.authenticate('jwt', { session: false }), (req, res) => {
    // console.log(req.user.id)
    CheckOut.findOneAndRemove({ _id: req.params.id })
        .then(() => res.json({ success: true }))
        .catch(err => res.status(404).json("删除失败"));

})



module.exports = router;