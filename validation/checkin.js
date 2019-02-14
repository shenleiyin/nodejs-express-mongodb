const Validator = require('validator');
const isEmpty = require("./is-empty");

module.exports = function validateCheckInInput(data) {
    let errors = {};
    //身份证正则表达
    let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    let phone = /^1[34578]\d{9}$/;

    data.name = !isEmpty(data.name) ? data.name : '';
    data.sex = !isEmpty(data.sex) ? data.sex : '';
    data.state = !isEmpty(data.state) ? data.state : '';
    data.identity = !isEmpty(data.identity) ? data.identity : '';
    data.location = !isEmpty(data.location) ? data.location : '';
    data.roomNumber = !isEmpty(data.roomNumber) ? data.roomNumber : '';
    data.housingPrice = !isEmpty(data.housingPrice) ? data.housingPrice : '';
    data.cashPledge = !isEmpty(data.cashPledge) ? data.cashPledge : '';
    data.paymentMethod = !isEmpty(data.paymentMethod) ? data.paymentMethod : '';
    data.dateCheck = !isEmpty(data.dateCheck) ? data.dateCheck : '';
    data.phone = !isEmpty(data.phone) ? data.phone : '';
    data.receptionist = !isEmpty(data.receptionist) ? data.receptionist : '';

    if (!reg.test(data.identity)) {
        errors.identity = "身份证格式不对"
    }
    if (!phone.test(data.phone)) {
        errors.phone = "电话格式不正确"
    }

    if (Validator.isEmpty(data.name)) {
        errors.name = "名字不能为空!";
    }

    if (Validator.isEmpty(data.sex)) {
        errors.sex = "年龄不能为空!";
    }

    if (Validator.isEmpty(data.state)) {
        errors.state = "国籍不能为空!";
    }

    if (Validator.isEmpty(data.identity)) {
        errors.identity = "身份证不能为空!";
    }

    if (Validator.isEmpty(data.location)) {
        errors.location = "居住地址不能为空!";
    }
    if (Validator.isEmpty(data.roomNumber)) {
        errors.roomNumber = "预订房间号不能为空!";
    }
    if (Validator.isEmpty(data.housingPrice)) {
        errors.housingPrice = "房价不能为空!";
    }
    if (Validator.isEmpty(data.cashPledge)) {
        errors.cashPledge = "押金不能为空!";
    }
    if (Validator.isEmpty(data.paymentMethod)) {
        errors.paymentMethod = "支部方式不能为空!";
    }
    if (Validator.isEmpty(data.dateCheck)) {
        errors.dateCheck = "入住日期不能为空!";
    }
    if (Validator.isEmpty(data.phone)) {
        errors.phone = "电话不能为空!";
    }
    if (Validator.isEmpty(data.receptionist)) {
        errors.receptionist = "接待员不能为空!";
    }


    return {
        errors,
        isValid: isEmpty(errors)
    };
}