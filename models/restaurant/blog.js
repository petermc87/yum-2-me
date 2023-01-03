const mongoose = require('mongoose')
require('./usertest')

const { Schema, model } = require('mongoose')

const blogSchema = new Schema({
  title: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usertest'
  },
  body: String
})

const Blog = model('Blog', blogSchema)

module.exports = Blog
