'use strict'

const Context = require('./lib/context')
const fetch = require('./lib/fetch')
const processImage = require('./lib/process-image')

const ContentTypes = {
    jpeg: 'image/jpeg',
    png: 'image/png',
    gif: 'image/gif',
    webp: 'image/webp',
    svg: 'image/svg+xml'
}

function handler(event, context, callback) {
    const path = event.path
    const query = event.queryStringParameters || {}
    const ctx = new Context({path, query}, process.env.S3_BUCKET, process.env.KEY_PREFIX)
    fetch(ctx).then(data => {
        return processImage(data, ctx.params)
    }).then(result => {
        const {buffer, info} = result
        const contentType = ContentTypes[info.format] || 'image/jpeg'
        callback(null, {
            'isBase64Encoded': true,
            'statusCode': 200,
            'headers': {'Content-Type': contentType},
            'body': buffer.toString('base64'),
        })
    }).catch(error => {
        if (typeof error === 'string') {
          context.fail(error)
        } else if (typeof error === 'object' && typeof error.message !== 'undefined') {
          context.fail(error.message)
        } else {
          context.fail('processing failed')
        }
    })
}

exports.handler = handler
