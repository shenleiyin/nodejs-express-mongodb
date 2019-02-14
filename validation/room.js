const Validator = require('validator');
const isEmpty = require("./is-empty");

module.exports = function validateroomInput(data) {
    let errors = {};

    data.header = !isEmpty(data.header) ? data.header : '';


    if (Validator.isEmpty(data.header)) {
        errors.header = "名字不能为空!";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}