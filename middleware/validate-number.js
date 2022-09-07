const validNum = (req, res, next) => {
    const number = parseInt(req.query.number);
    if (!isNaN(number)) {
        req.squareNumber = number * number
        next();
    } else {
        console.log(typeof number)
        next("invalid Number")
    }
}
module.exports = { validNum }