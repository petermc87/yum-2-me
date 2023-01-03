require('dotenv').config()
const crypto = require('crypto')

console.log(crypto.createHmac('sha256', 'secret').update(process.env.SECRET).digest('hex').split('').reverse().join(''))
