
export default function MenuItem ({
  handleRemoveItem,
  handleAddToOrder,

  menuItems,
  filterOne,
  filterTwo,

  user,

  setCart,
  setRestaurantOrder,

  foundRestaurant

}) {
  return (
    <>
      {
        menuItems.length > 0
          ? <>
            {
              menuItems.filter(item => item.category === filterOne || item.category === filterTwo).map((item) => {
                return (
                  <>
                    <div className='res-icon' id='menu-item' key={item._id}>
                      <div className='menu-image'>
                        <img src={item.image} alt='starter' />
                      </div>
                      <div className='menu-details'>
                        <h4>{item.name}</h4>
                        <p>${item.price}</p>
                      </div>

                      {
                      user.userType
                        ? <div className='menu-button'>
                          <button onClick={() => {
                            handleRemoveItem(item._id)
                          }}
                          >&#10006;
                          </button>
                        </div>
                        : <div className='menu-button' id='menu-button-select'>
                          <button onClick={() => {
                            handleAddToOrder(item._id)
                          }}
                          >&#43;
                          </button>
                        </div>
                    }

                    </div>
                  </>
                )
              })
            }
          </>
          : 'No items to display'
      }
    </>
  )
}
