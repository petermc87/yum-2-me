const mongoose = require('mongoose')
require('./blog')

const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  name: String,
  email: String,
  blogs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Blog'
  }]
})

const Usertest = model('Usertest', userSchema)

module.exports = Usertest
