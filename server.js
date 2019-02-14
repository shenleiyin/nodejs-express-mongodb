const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const app = express();

//引入users.js
const users = require("./routes/api/users");
const roomReservation = require("./routes/api/rooms/roomReservation");
const checkin = require("./routes/api/rooms/checkin");
const checkout = require("./routes/api/rooms/checkOut");
const changeroom = require("./routes/api/rooms/changeRoom");

//DB config
const db = require("./config/keys").mongoURI;

//使用body-parser中间键
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Connect to mongodb
mongoose.connect(db, { useNewUrlParser: true })
	.then(() => {
		console.log("Mongodb connected");
	})
	.catch(err => console.log(err));



// 使用中间件实现允许跨域
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Content-Type");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	next();
})

// app.get("/",(req,res)=>{
// 	res.send("heelo")
// })

// passport 初始化
app.use(passport.initialize());

require("./config/passport")(passport);

//使用routes
app.use("/api/users", users);
app.use("/api/rooms/roomReservation", roomReservation);
app.use("/api/rooms/checkin", checkin);
app.use("/api/rooms/checkout", checkout);
app.use("/api/rooms/changeroom", changeroom);

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`server runing on port ${port}`);
})