const fs = require('fs')
const request = require('request')

const options = {
  url: 'https://lpr.recoqnitics.com/detect',
  method: 'POST',
  formData: {
    access_key: '6b642ebbceb9f76cc3e9',
    secret_key: '627f0a6f85759d3147e344aad34a9b20e83adce5',
    filename: fs.createReadStream('/tmp/car.jpg')
  }
}

request(options, (err, res, body) => {
  if (err) return console.error('upload failed', err)
  body = JSON.parse(body)
  console.dir(body, { depth: null })
})
