require('dotenv').config()
require('./database')

const Item = require('../models/restaurant/item')
const Category = require('../models/restaurant/category')

(async function () {
  await Category.deleteMany({})
  const categories = await Category.create([
    { name: 'Starters', sortOrder: 10 },
    { name: 'Mains', sortOrder: 20 },
    { name: 'Sides', sortOrder: 30 },
    { name: 'Desserts', sortOrder: 40 },
    { name: 'Drinks', sortOrder: 50 }
  ])

  await Item.deleteMany({})
  const items = await Item.create([

    { name: 'Shrimp cocktail', image: 'this', category: categories[0], price: 12 },
    { name: 'Lettuce with a bit of mayonaise', image: 'this', category: categories[0], price: 20.99 },
    { name: 'Hipster Avocado & Toast', image: 'this', category: categories[0], price: 13.50 },
    { name: 'Eggs n stuff', image: 'this', category: categories[0], price: 8.50 },
    { name: 'Charcuterie', image: 'this', category: categories[0], price: 18.00 },
    { name: 'Fried Calamari', image: 'this', category: categories[0], price: 21.00 },

    { name: 'Branzino', image: 'this', category: categories[1], price: 15 },
    { name: 'Steak', image: 'this', category: categories[1], price: 25.50 },
    { name: 'Chicken', image: 'this', category: categories[1], price: 20.99 },
    { name: 'Salmon', image: 'this', category: categories[1], price: 18.50 },
    { name: 'Lamb', image: 'this', category: categories[1], price: 28.50 },
    { name: 'Branzino', image: 'this', category: categories[1], price: 20.00 },
    { name: 'Salad', image: 'this', category: categories[1], price: 18.00 },

    { name: 'Fries', image: 'this', category: categories[2], price: 7.50 },
    { name: 'Lemony Potatoes', image: 'this', category: categories[2], price: 8.00 },
    { name: 'Sweet Potato Fries', image: 'this', category: categories[2], price: 8.50 },
    { name: 'Steamed Vegetables', image: 'this', category: categories[2], price: 7.50 },
    { name: 'Roated Veg', image: 'this', category: categories[2], price: 10.50 },

    { name: 'Black Forest Gateau', image: 'this', category: categories[3], price: 7.50 },
    { name: 'Red Velvet Cake', image: 'this', category: categories[3], price: 9.50 },
    { name: 'Ice Cream', image: 'this', category: categories[3], price: 6.99 },
    { name: 'Tiramisu', image: 'this', category: categories[3], price: 13.99 },
    { name: 'Pecan Pie', image: 'this', category: categories[3], price: 12.00 },
    { name: 'Apple Pie', image: 'this', category: categories[3], price: 9.00 },

    { name: 'Coca Cola', image: 'this', category: categories[4], price: 4.50 },
    { name: 'Orange Soda', image: 'this', category: categories[4], price: 4.00 },
    { name: 'Beer', image: 'this', category: categories[4], price: 8.99 },
    { name: 'Wine', image: 'this', category: categories[4], price: 7.99 },
    { name: 'Soda Water', image: 'this', category: categories[4], price: 3.50 },
    { name: 'Bottled Water', image: 'this', category: categories[4], price: 4.00 }
  ])
  console.log(items)

  process.exit()
})()
