const sharp = require('sharp')

module.exports = function (data, image) {
    return new Promise((resolve, reject) => {
        sharp(data.Body)
            .rotate()
            .resize(image.width, image.height, {fit: image.fit})
            .toBuffer(function (err, stdout, stderr) {
                if (err) {
                    return reject(err)
                }
                const buffer = new Buffer(stdout, 'binary')
                resolve(buffer)
            })
    })
}
