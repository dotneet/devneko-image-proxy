const sharp = require('sharp')

module.exports = async function (data, params) {
    const image = sharp(data.Body)
    const info = await image.metadata()
    const buffer = await image.rotate()
        .resize(params.width, params.height, {fit: params.fit})
        .toBuffer()
    return {
        buffer,
        info,
    }
}
