const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI)

const db = mongoose.connection

db.on('connected', function () {
  console.log(`Connected to ${db.name} ar ${db.host}:${db.port}`)
})
