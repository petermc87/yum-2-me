// Connect to the database
require('dotenv').config()
require('./config/database')

// Local variables will come in handy for holding retrieved documents
let user, item, category, order
let users, items, categories, orders
