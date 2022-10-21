'use strict '
const express = require('express')
const app = express();
const cors = require('cors')
const validateNum = require('./middleware/validate-number')
const errorHandler = require('./middleware/500')
app.use(cors());
app.use(express.json());


app.use(validateNum)


app.get('/valid', validateNum, (req, res) => {
    // res.status(200).send(`this is the ${req.numbersquere}`);
    res.status(200).json({
        number: req.query.number,
        squereNumber: req.numbersquere
    })
    console.log(req.query.number)


})
function start(port) {
    app.listen(port, () => {
        console.log(`work on ${port}`)
    })
}

app.use(errorHandler)
module.exports = {
    app,
    start
}