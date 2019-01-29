const sharp = require('sharp')

module.exports = async function (data, params) {
    let image = sharp(data.Body)
    image = image.rotate()
    if (typeof params.width !== 'undefined') {
      image = image.resize(params.width, params.height, {fit: params.fit})
    }
    const originalInfo = await image.metadata()
    if (params.format || params.progressive || params.quality) {
      let format = params.format ? params.format : originalInfo.format
      let options = {
        progressive: params.progressive,
        quality: params.quality
      }
      image = image.toFormat(format, options)
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
