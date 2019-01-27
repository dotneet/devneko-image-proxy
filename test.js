require('dotenv').config()

const {handler} = require('./index.js')
handler({
        path: '/work/photo.png',
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
