import { useNavigate } from "react-router-dom"

export default function DriverShowPage({
  foundDriver,
  driverUser
}){
  
  const navigate = useNavigate()

  return(
    <>
     
      {/* <div className='res-icon' id='back-button'> */}
        <div className='button-container' id='back-button'>
        <h1>Driver Profile</h1>
            <button onClick={()=>{navigate('/drivers')}}>
                &#8249;
            </button>
        </div>
      {/* </div> */}
      {foundDriver && driverUser 
        ?
            <div className="form-container" id="profile-info">
            <h2>{driverUser.name}</h2>
            <div className='res-image'>
                <img src={foundDriver.image} />
            </div>
            <h1>{foundDriver.location}</h1>
            </div>
        :
        ''
      }

    </>
  ) 
}