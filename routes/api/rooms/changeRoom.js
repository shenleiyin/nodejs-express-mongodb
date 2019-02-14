const express = require("express");
const router = express.Router();
const passport = require("passport");

const User = require("../../../models/User");
const ChangeRoom = require("../../../models/Rooms/ChangeRoom");
const validateChangeRoomInput = require("../../../validation/changeRoom");


// $route  GET /api/rooms/changeroom/test
// @desc   返回的请求的json数据
// @access public
router.get("/test", (req, res) => {
    res.json({ msg: "profile works" })
})

// $route  GET /api/rooms/changeroom
// @desc   获取当前登录用户的个人信息
// @access private
router.get("/", passport.authenticate('jwt', { session: false }), (req, res) => {
    const errors = {};
    ChangeRoom.findOne({ user: req.user.id })
        .populate('user', ["name", "email", "avatar"])
        .then(user => {
            if (!user) {
                errors.ChangeRoom = "该用户不存在";
                return res.status(404).json(errors)
            }
            res.json(user)
        })
        .catch(err => res.status(404).json(err))
})

// $route  POST /api/rooms/checkin
// @desc  创建客人更换房价信息接口
// @access private
router.post("/", passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateChangeRoomInput(req.body);
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
    if (req.body.poomType) roomFields.poomType = req.body.poomType;
    if (req.body.priceSpread) roomFields.priceSpread = req.body.priceSpread;
    if (req.body.housingPrice) roomFields.housingPrice = req.body.housingPrice;
    if (req.body.paymentMethod) roomFields.paymentMethod = req.body.paymentMethod;
    // if (req.body.cashPledge) roomFields.cashPledge = req.body.cashPledge;
    if (req.body.dateCheck) roomFields.dateCheck = req.body.dateCheck;
    if (req.body.outDate) roomFields.outDate = req.body.outDate;
    if (req.body.remarks) roomFields.remarks = req.body.remarks;
    if (req.body.phone) roomFields.phone = req.body.phone;
    if (req.body.receptionist) roomFields.receptionist = req.body.receptionist;

    new CheckIn(roomFields).save()
        .then(rooms => res.json(rooms))
        .catch(err => res.status(404).json("创建失败"))


})

// $route  POST /api/rooms/checkin/edit/:id
// @desc   编辑客人入住信息接口
// @access private
router.post("/edit/:id", passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateCheckInInput(req.body);
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
    if (req.body.cashPledge) roomFields.cashPledge = req.body.cashPledge;
    if (req.body.dateCheck) roomFields.dateCheck = req.body.dateCheck;
    if (req.body.outDate) roomFields.outDate = req.body.outDate;
    if (req.body.remarks) roomFields.remarks = req.body.remarks;
    if (req.body.phone) roomFields.phone = req.body.phone;
    if (req.body.receptionist) roomFields.receptionist = req.body.receptionist;

    CheckIn.findOneAndUpdate({ _id: req.params.id }, { $set: roomFields }, { new: true })
        .then(room => res.json(room))
        .catch(err => res.status(404).json(err + "编辑失败"))

})


// $route  GET /api/rooms/checkin/all
// @desc   获取所有人的个人信息
// @access private
router.get("/all", passport.authenticate('jwt', { session: false }), (req, res) => {
    const errors = {};
    CheckIn.find()
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

// $route  GET /api/rooms/checkin/:id
// @desc   获取单给个人的个人信息
// @access private
router.get("/:id", passport.authenticate('jwt', { session: false }), (req, res) => {
    const errors = {};
    CheckIn.findOne({ _id: req.params.id })
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
// @desc   删除该用户入住客人信息接口
// @access Private
router.delete("/delete/:id", passport.authenticate('jwt', { session: false }), (req, res) => {
    // console.log(req.user.id)
    CheckIn.findOneAndRemove({ user: req.user.id })
        .then(() => res.json({ success: true }))
        .catch(err => res.status(404).json(err + "删除失败"))

})



module.exports = router;