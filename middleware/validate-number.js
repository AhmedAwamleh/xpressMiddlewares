'use strict'

function validateNum(req, res, next) {
    const number = parseInt(req.query.number)
    console.log(typeof number)
    if (!isNaN(number)) {
        req.numbersquere = number * number
        console.log(req.numbersquere)
        next()
    } else {
        next(`this is not a number ${number}`)
    }
}
module.exports = validateNum
