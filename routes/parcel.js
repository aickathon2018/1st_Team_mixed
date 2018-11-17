var express = require('express')
var router = express.Router()
var request = require('request')
var multer = require('multer')
var upload = multer()
var fs = require('fs')

/* Temporary data store. */
const parcels = [
  {
    id: '75e7cb59',
    address: '123, Fake Street',
    receive_by: '2018-02-29',
    deliver_by: '2017-11-11',
    signed: false,
    deliverer: '29c27e8a'
  }
]

const deliverers = {
  '29c27e8a': {
    name: 'John Doe',
    gender: 'Male',
    age: 25
  }
}

/* GET all parcels. */
router.get('/', function (req, res, next) {
  res.send(parcels.map(parcel => ({ id: parcel.id, signed: parcel.signed })))
})

/* GET parcel by id. */
router.get('/:id', function (req, res, next) {
  const parcel = parcels.find(parcel => parcel.id === req.params.id)
  if (parcel !== undefined) {
    res.send(parcel)
  } else {
    res.status(404).send({ state: 'failure' })
  }
})

/* POST sign parcel. */
router.post('/:id/sign', upload.single('f'), function (req, res, next) {
  const parcel = parcels.find(parcel => !parcel.signed && parcel.id === req.params.id)
  if (!parcel) return res.status(404).send({ state: 'failure', message: 'not found' })
  const deliverer = deliverers[parcel.deliverer]
  if (!deliverer) return res.status(500).end()

  const options = {
    url: 'https://face.recoqnitics.com/analyze',
    method: 'POST',
    formData: {
      access_key: '6b642ebbceb9f76cc3e9',
      secret_key: '627f0a6f85759d3147e344aad34a9b20e83adce5',
      filename: {
        value: req.file.buffer,
        options: {
          filename: '/root/image.jpg',
          contentType: 'image/jpeg'
        }
      }
    }
  }

  request(options, (err, _res, body) => {
    if (err) {
      console.error('upload fail', err)
      return res.status(500).send({ state: 'failure' })
    }

    try {
      body = JSON.parse(body)
      console.dir(body, { depth: null })
    } catch (e) {
      console.error(body)
      return res.status(500).send({ state: 'failure' })
    }

    // check if face is valid
    if (body.faces && body.faces.length !== 1)
      return res.status(509).end({ message: 'too many faces' })
    const face = body.faces[0]
    if (face.gender.value === deliverer.gender
        && Math.abs(face.age - deliverer.age) < 5) {
      parcel.signed = true
      res.send({ state: 'success' })
    } else {
      res.status(401).send({ message: 'unrecognized face' })
    }
  })
})

module.exports = router
