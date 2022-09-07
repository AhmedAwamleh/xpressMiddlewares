'use strict'

function errorHandler(err, req, res, next) {
    res.status(500).send(
        `Server Error : ${err.message || err} `
    );
}

module.exports = {
    errorHandler
}