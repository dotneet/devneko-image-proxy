const sharp = require('sharp')

module.exports = async function (data, params) {
    let image = sharp(data.Body)
    image = image.rotate().resize(params.width, params.height, {fit: params.fit})
    if (params.format) {
      image = image.toFormat(params.format)
    }
    return await new Promise((resolve, reject) => {
      image.toBuffer((err, data, info) => {
        if (err) {
          reject(err)
        }
        const buffer = new Buffer(data, 'binary')
        resolve({buffer, info})
      })
    })
}
