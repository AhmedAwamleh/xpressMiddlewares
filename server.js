require('dotenv').config()
const express = require('express')
app = express();
const cors = require('cors')
app.use(cors())

const PORT = process.env.PORT
const { validNum } = require(`./middleware/validate-number`)
const { errorHandler } = require('./error-handlers/500')

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('hello world')
})


app.get('/square', validNum, (req, res) => {
    console.log(req.query.number)
    res.status(200).send(`square of ${req.query.number} is ${req.squareNumber}`);
});


app.use(errorHandler);
app.listen(PORT, () => {
    console.log(`server listen on ${PORT}`)
})

module.exports = {
    app: app,
}