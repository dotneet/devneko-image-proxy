const FITS = ['contain', 'cover', 'fill', 'inside', 'outside']

module.exports = class Context {
    constructor(event, context, bucket, keyPrefix) {
        this.event = event
        this.context = context
        this.filename = event.path.replace(/^\//, '')
        this.bucket = bucket
        this.keyPrefix = keyPrefix || ''
        this.key = this.keyPrefix + this.filename
        const query = event.queryStringParameters
        let image = {}
        image.width = parseInt(query.w)
        if (typeof query.h === 'undefined') {
            image.height = image.width
        } else {
            image.height = parseInt(query.h)
        }
        image.fit = 'contain'
        if (typeof query.fit !== 'undefined' && FITS.some(i => i === query.fit)) {
            image.fit = query.fit
        }
        this.image = image
    }
}
