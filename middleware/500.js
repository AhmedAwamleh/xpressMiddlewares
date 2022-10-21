'use strict '

module.exports = (err, req, res, next) => {
  console.log(err)
  res.status(500).send({
    code: 500,
    msg: `serve have error ${err}`
  })
}
