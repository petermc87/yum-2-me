![Logo](public/images/logo.png)

# Introduction 
Inspired by other food delivery applications drivers & restaurants lack of accountability, **Yum2Me** is an app that makes it easy for the Customer, Driver and Restaurant to provide feedback based on the service. It uses a unique rating system making transparency guaranteed across the board!

# Technologies Used 

* JavaScript
* CSS
* React 
* Mongoose
* Node
* Express

# Getting Started
Follow the link to the live page:
LINK HERE

When you arrive at the landing page, there will be an option to Login or Signup. Here, you can choose whether you are accessing the Restaurant or Customer home page.

When logged in, a hamburger will direct you to the profile section. Update the information in the field provided. 

## Customers
When you select the **Yum2me** icon on the left corner of the navigation bar, you will be rediected to the index page. All registered restaurants will be listed here for the customer to select.

After selecting a restaurant to order from, you will be directed to the new orders page.

ADD CART

ADD COMPLETED ORDERS

## Restaurants
The **Yum2me** icon will redirect you to the restaurants you have created. To edit, click on a restaurant.

This page will have the options to add, delete and edit menu items. You will also have the option of editing the original restauarant information.


# Planning
[Trello Board](https://trello.com/b/3ZxB27rA/yum2me)

[ERD Link](https://lucid.app/lucidchart/b52bc4f5-208f-4236-b238-51611daf5680/edit?beaconFlowId=6727BA894B6096A9&invitationId=inv_2e64d5cd-5c18-424b-9689-7f77493518d0&page=0_0#)

## Wire frames

### Landing Page
![Landing Page](public/images/landing.png)

### Customer Facing Webpage
![Customer Page](public/images/customerpage.png)

### Restaurant Facing Index
![Restaurant Page](public/images/restaurantpage.png)


## ERD
![ERD](public/images/ERD.png)


## Screenshots

# Breakdown of Application

Using MERN stack setup, the application has full CRUD capability. See below for the file structure.

ADD FILE STRUCTURE TREE HERE

```
controllers
 ┗ api
 ┃ ┣ customers.js
 ┃ ┣ items.js
 ┃ ┣ orders.js
 ┃ ┣ restaurants.js
 ┃ ┣ users.js
 ┃ ┗ usertest.js

```
## Conrtollers

```js
  async createMenu (req, res, next) {
    try {
      const newMenuItem = await Item.create(req.body)
      await Restaurant.findByIdAndUpdate(newMenuItem.restaurantId, {
        $push: {
          mwnu: newMenuItem._id
        }
      })
      res.status(200).json(newMenuItem)
      res.locals.data.restaurant = newMenuItem
    } catch (error) {
      console.log(error)
    }
  }
```



# Unsolved Problems 

