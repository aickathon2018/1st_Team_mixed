var express = require('express')
var router = express.Router()

/* Temporary data store. */
parcel = [
  {
    id: '75e7cb59',
    address: '123, Fake Street',
    receive_by: '2018-02-29',
    deliver_by: '2017-11-11'
  }
]

/* POST parcel page. */
router.post('/:id/sign', function (req, res, next) {
  console.log(req.body)
  res.send({ 'state': 'success' })
})

module.exports = router
