export default function NewOrderPage ({ foundRestaurant }) {
  return (
    <div className='res-icon' id='show page'>
      <h1>~Place an Order Below~</h1>
      <br />
      <h2>{foundRestaurant.name}</h2> <br />
      <h2>{foundRestaurant.type}</h2>
      <h3>Located at: {foundRestaurant.location}</h3>
    </div>
  )
}

{ /* <div className='res-icon' key={restaurant._id} >
<h1>{restaurant.name}</h1>
    <p>{restaurant.type}</p>
    <button onClick={() => setFoundRestaurant(restaurant)}>
        <Link to='/orders/new'>Order from here</Link>
    </button>
</div> */ }
