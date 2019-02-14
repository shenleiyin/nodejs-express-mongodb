const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const User = require("../../../models/User");
const RoomReservation = require("../../../models/Rooms/RoomReservation");
const validateRoomReservationInput = require("../../../validation/roomReservation");

// $route  GET /api/rooms/roomReservation/test
// @desc   返回的请求的json数据
// @access public
router.get("/test", (req, res) => {
    res.json({ msg: "profile works" })
})

// $route  GET /api/rooms/roomReservation
// @desc   获取当前登录用户的个人信息
// @access private
router.get("/", passport.authenticate('jwt', { session: false }), (req, res) => {
    const errors = {};
    RoomReservation.findOne({ user: req.user.id })
        .populate('user', ["name", "email", "avatar"])
        .then(user => {
            if (!user) {
                errors.RoomReservation = "该用户不存在";
                return res.status(404).json(errors)
            }
            res.json(user)
        })
        .catch(err => res.status(404).json(err))
})


// $route  POST /api/rooms/roomReservation
// @desc   创建房预订信息接口
// @access private
router.post("/", passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateRoomReservationInput(req.body);
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
    if (req.body.housingPrice) roomFields.housingPrice = req.body.housingPrice;
    if (req.body.paymentMethod) roomFields.paymentMethod = req.body.paymentMethod;
    if (req.body.dateCheck) roomFields.dateCheck = req.body.dateCheck;
    if (req.body.remarks) roomFields.remarks = req.body.remarks;
    if (req.body.phone) roomFields.phone = req.body.phone;
    if (req.body.receptionist) roomFields.receptionist = req.body.receptionist;

    new RoomReservation(roomFields).then(rooms => res.json(rooms));

})

// $route  POST /api/rooms/roomReservation/edit/:id
// @desc   编辑房预订信息接口
// @access private
router.post("/edit/:id", passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateRoomReservationInput(req.body);
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
    if (req.body.housingPrice) roomFields.housingPrice = req.body.housingPrice;
    if (req.body.paymentMethod) roomFields.paymentMethod = req.body.paymentMethod;
    if (req.body.dateCheck) roomFields.dateCheck = req.body.dateCheck;
    if (req.body.remarks) roomFields.remarks = req.body.remarks;
    if (req.body.phone) roomFields.phone = req.body.phone;
    if (req.body.receptionist) roomFields.receptionist = req.body.receptionist;

    RoomReservation.findOneAndUpdate({ _id: req.params.id }, { $set: roomFields }, { new: true })
        .then(room => res.json(room))

})

// $route  GET /api/rooms/RoomReservation/all
// @desc   获取所有人的个人信息
// @access private
router.get("/all", passport.authenticate('jwt', { session: false }), (req, res) => {
    const errors = {};
    RoomReservation.find()
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

// $route  GET /api/rooms/RoomReservation/:id
// @desc   获取单个人的个人信息
// @access private
router.get("/:id", passport.authenticate('jwt', { session: false }), (req, res) => {
    const errors = {};
    RoomReservation.findOne({ _id: req.params.id })
        .then(user => {
            if (!user) {
                errors.CheckIn = "该用户不存在";
                return res.status(404).json(errors)
            }
            res.json(user)
        })
        .catch(err => res.status(404).json(err))
})


// $route  DELETE /api/rooms/roomReservation/delete/:id
// @desc   删除客人预订信息
// @access Private
router.delete("/delete/:id", passport.authenticate('jwt', { session: false }), (req, res) => {
    RoomReservation.findOneAndRemove({ _id: req.params.id })
        .then(() => res.json({ success: true }))
        .catch(err => res.status(404).json("删除失败"));

})


module.exports = router;