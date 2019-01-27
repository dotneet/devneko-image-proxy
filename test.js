require('dotenv').config()

const {handler} = require('./index.js')
handler({
        path: '/work/photo.png',
        queryStringParameters: {
            w: '10',
            h: '10',
            fit: 'contain',
            format: 'jpeg',
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
