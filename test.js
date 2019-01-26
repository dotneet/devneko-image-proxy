'use strict'

const handler = require('./index')
handler({
        path: '/photo.jpg',
        queryStringParameters: {
            w: '100',
            h: '100',
            fit: 'contain',
        },
    },{
        fail: msg => {
            console.error(msg)
        },
    },
    (a, msg) => {
        console.log(msg)
    },
)
