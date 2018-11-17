var express = require('express')
var router = express.Router()

/* POST parcel page. */
router.post('/:id/sign', function (req, res, next) {
  console.log(req.params.id)
  res.send({ 'state': 'success' })
})

module.exports = router
