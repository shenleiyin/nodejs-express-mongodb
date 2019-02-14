// const express = require("express");
// const router = express.Router();
// const mongoose = require("mongoose");
// const passport = require("passport");

// const User = require("../../models/User");
// const Room = require("../../models/Rooms/CheckIn");

// //引入验证方法
// const validateroomInput = require("../../validation/room")
// const validateHousekeepingInput = require("../../validation/housekeeping")

// // $route  GET api/room/test
// // @desc   返回的请求的json数据
// // @access public
// router.get("/test", (req, res) => {
//     res.json({ msg: "profile works" })
// })


// // $route  GET api/rooms
// // @desc   获取当前用户登陆的个人管理的信息
// // @access private
// router.get("/", passport.authenticate('jwt', { session: false }), (req, res) => {
//     const errors = {};
//     Room.findOne({ user: req.user.id })
//         .then(room => {
//             if (!room) {
//                 errors.noroom = "该用户不存在";
//                 return res.status(404).json(errors)
//             }
//             res.json(room);
//         })
//         .catch(err => res.status(404).json(err))
// })


// // $route  POST api/rooms
// // @desc   创建和编辑个人信息接口
// // @access private
// router.post("/", passport.authenticate('jwt', { session: false }), (req, res) => {
//     const { errors, isValid } = validateroomInput(req.body);

//     // 判断isValid是否通过
//     if (!isValid) {
//         return res.status(400).json(errors);
//     }

//     const roomFields = {};
//     roomFields.user = req.user.id;
//     if (req.body.header) roomFields.header = req.body.header;

//     if (typeof req.body.control !== "undefined") {
//         roomFields.control = req.body.control.split(",");
//     }


//     Room.findOne({ user: req.user.id })
//         .then(room => {
//             if (room) {
//                 //用户信息存在 执行更新操作
//                 Room.findOneAndUpdate({ user: req.user.id }, { $set: roomFields }, { new: true }).then(room => res.json(room));
//             } else {
//                 //用户不存在 执行创建方法
//                 Room.findOne({ header: roomFields.header })
//                     .then(room => {
//                         if (room) {
//                             errors.name = "该用户已存在，请勿从新创建";
//                             res.status(400).json(errors);
//                         }
//                         new Room(roomFields).save().then(room => res.json(room))
//                     })
//             }
//         })


// })





// // // $route  POST api/rooms/housekeeping
// // // @desc   添加客房预订接口
// // // @access private
// router.post("/housekeeping", passport.authenticate('jwt', { session: false }), (req, res) => {

//     const { errors, isValid } = validateHousekeepingInput(req.body);

//     // 判断isValid是否通过
//     if (!isValid) {
//         return res.status(400).json(errors);
//     }

//     Room.findOne({ user: req.user.id })
//         .then(room => {


//             const newRegulate = {
//                 name: req.body.name,
//                 sex: req.body.sex,
//                 state: req.body.state,
//                 identity: req.body.identity,
//                 location: req.body.location,
//                 roomNumber: req.body.roomNumber,
//                 payment: req.body.payment,
//                 dateCheck: req.body.dateCheck,
//                 remarks: req.body.remarks,
//                 phone: req.body.phone,
//                 destClerk: req.body.destClerk,
//             }
//             if (room) {
//                 let arr = room.housekeeping.map(item => item);
//                 // console.log(arr)
//                 for (i in arr) {
//                     console.log(arr[i].identity)
//                 }
//                 if (arr[i].identity === req.body.identity) {
//                     //执行更新操作

//                     console.log(newRegulate.identity)
//                     Room.findOneAndUpdate({ identity: newRegulate.identity }, { $set: newRegulate }, { new: true }).then(room => res.json(room))
//                 }
//             } else {
//                 //用户不存在 执行创建
//                 console.log(newRegulate.housekeeping)
//                 // Room.findOne({})
//                 //     .then(room => {
//                 //         if (room) {
//                 //             errors.name = "该用户已存在，请勿从新创建";
//                 //             res.status(400).json(errors);
//                 //         }
//                 //         new Room(newRegulate).save().then(room => res.json(room))
//                 //     })
//             }

//             // const newRegulate = {
//             //     name: req.body.name,
//             //     sex: req.body.sex,
//             //     state: req.body.state,
//             //     identity: req.body.identity,
//             //     location: req.body.location,
//             //     roomNumber: req.body.roomNumber,
//             //     payment: req.body.payment,
//             //     dateCheck: req.body.dateCheck,
//             //     remarks: req.body.remarks,
//             //     phone: req.body.phone,
//             //     destClerk: req.body.destClerk,
//             // }
//             // room.housekeeping.unshift(newRegulate);
//             // room.save()
//             //     .then(room => res.json(room));
//         })
// })



// // $route  GET api/rooms:header
// // @desc   header
// // @access public
// router.get(":header", (req, res) => {
//     const errors = {};
//     Room.findOne({ header: req.params.header })
//         .then(room => {
//             if (!room) {
//                 errors.noroom = "没有找该用户";
//                 res.status(404).json(errors)
//             }
//             res.json(room);
//         })
//         .catch(err => res.status(404).json(err));

// })


// // $route  GET api/rooms/all
// // @desc   获取所有人的信息
// // @access public
// router.get("/all", (req, res) => {
//     const errors = {};
//     Room.find()
//         .populate("user", ["name", "avatar", "email", "phone"])
//         .then(room => {
//             if (!room) {
//                 errors.noroom = "没有任何用户信息";
//                 res.status(404).json(errors)
//             }
//             res.json(room);
//         })
//         .catch(err => res.status(404).json(err));

// })



// module.exports = router;