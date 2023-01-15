import { Link } from 'react-router-dom'
import React from 'react'
// import 'bootstrap/dist/js/bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap'

export default function AllRestaurants ({
  restaurants,
  setFoundRestaurant,

  setMenuItems,
  getMenuItems,

  foundCustomer

}) {
  const handleChange = (restaurant) => {
    setFoundRestaurant(restaurant)
    setMenuItems(getMenuItems(restaurant._id))
  }

  return (
    <>
      <div className='index-header'>
        <h1>Choose a Restaurant</h1>
        {/* <div>
            <Carousel fade>
                <Carousel.Item>
                <img
                        src={'https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q='}
                        alt={'image'}
                        className={'d-block w-120'}
                    />
                  <Carousel.Caption>
                      <h3>This is a beautiful image</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                        src={'https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q='}
                        alt={'image'}
                        className={'d-block w-120'}
                    />
                    <Carousel.Caption>
                        <h3>This is another most fancy a</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={'https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q='}
                        alt={'image'}
                        className={'d-block w-120'}
                    />
                    <Carousel.Caption>
                        <h3>This is another Beautiful Image</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div> */}
      </div>

      {
        restaurants
          ? <>
            {
        restaurants.map((restaurant) => {
          return (
            <div className='res-icon' key={restaurant._id} id='res-icon-index'>
              <div className='res-image'>
                <img src={restaurant.image} />
              </div>
              <div className='res-details'>
                <h1>{restaurant.name}</h1>
                <p>{restaurant.type}</p>
              </div>
              <div className='res-button'>
                <button
                  to='orders/new' onClick={() =>
                  // setFoundRestaurant(restaurant)
                    handleChange(restaurant)}
                >
                  <Link style={{ textDecoration: 'none', color: 'white' }} to='/orders/new'>Order from here</Link>
                </button>
              </div>
            </div>
          )
        })
        }
          </>
          : 'No restaurants to display'
      }

    </>
  )
}
