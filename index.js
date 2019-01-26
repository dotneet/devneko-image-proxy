'use strict'

const Context = require('./lib/context')
const fetch = require('./lib/fetch')
const processImage = require('./lib/process-image')

function handler(event, context, callback) {
    const filename = event.path.replace(/^\//, '')
    const ctx = new Context(event, context, process.env.S3_BUCKET, process.env.KEY_PREFIX)
    fetch(ctx).then(data => {
        return processImage(data, ctx.image)
    }).then(buffer => {
        let contentType = null
        if (filename.endsWith('jpg') || filename.endsWith('jpeg')) {
            contentType = 'image/jpeg'
        } else if (filename.endsWith('png')) {
            contentType = 'image/png'
        } else if (filename.endsWith('gif')) {
            contentType = 'image/gif'
        }
        callback(null, {
            'isBase64Encoded': true,
            'statusCode': 200,
            'headers': {'Content-Type': contentType},
            'body': buffer.toString('base64'),
        })
    }).catch(error => {
        console.log(error)
        context.fail('processing failed')
    })
}

exports.handler = handler

/*
handler({
        path: '/work/photo.png',
        queryStringParameters: {
            w: '100',
            fit: 'contain',
        },
    },
    {
        fail: msg => {
            console.error(msg)
        },
    },
    (a, msg) => {
        console.log(msg)
    },
)
*/
