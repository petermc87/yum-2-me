
export default function CreateCustomerProfile ({
    handleChange,
    newCustomer,
    createCustomer,
    setNewCustomer
})
{
    return (
        <div>
            <div className='form-container'>
            <form autoComplete='off' onSubmit={createCustomer}>
            
                <button type='submit' >LOG OUT</button>
            </form>
            </div>
        </div>

    //         <div>
    //     <div className='form-container'>
    //       <form autoComplete='off' >
    //         <label>Image</label>
    //         <input type='text' name='image'  />
    //         <label>Location</label>
    //         <input type='text' name='location'  />
    //         <button type='submit' >UPDATE PROFILE</button>
    //       </form>
    //     </div>
    //   </div>
        )

    }




// <div>
// <div className='form-container'>
//   <form autoComplete='off' onSubmit={createCustomer()}>
//     <label>Image</label>
//     <input type='text' name='image' value={newCustomer.image} onChange={handleChange} />
//     <label>Location</label>
//     <input type='text' name='location' value={newCustomer.location} onChange={handleChange} required />
//     <button type='submit' >UPDATE PROFILE</button>
//   </form>
// </div>
// </div>


    //     <div>
    //     <div className='form-container'>
    //       <form autoComplete='off' onSubmit={createCustomer()}>
    //         <label>Image</label>
    //         <input type='text' name='image' value={newCustomer.image} onChange={handleChange} />
    //         <label>Location</label>
    //         <input type='text' name='location' value={newCustomer.location} onChange={handleChange} required />
    //         <button type='submit' >UPDATE PROFILE</button>
    //       </form>
    //     </div>
    //   </div>


        //     <div>
    //     <div className='form-container'>
    //       <form autoComplete='off' >
    //         <label>Image</label>
    //         <input type='text' name='image'  />
    //         <label>Location</label>
    //         <input type='text' name='location'  />
    //         <button type='submit' >UPDATE PROFILE</button>
    //       </form>
    //     </div>
    //   </div>

// import { Component } from 'react'
// // import { signUp } from '../../utilities/users-service'

// export default class CustomerProfileForm extends Component {
//   state = {
//     image: '',
//     location: '',
//     user: ''
//   }

//   handleSubmit = async (evt) => {
//     evt.preventDefault()
//     try {
//       const formData = { ...this.state }
//       formData = this.props.user._id  
//     } catch (error) {
//       this.setState({ error: 'Update Failed' })
//     }
//   }

//   handleChange = (evt) => {
//     this.setState({
//       [evt.target.name]: evt.target.value
//     })
//   }

//   render () {
//     return (
//       <div>
//         <div className='form-container'>
//           <form autoComplete='off' onSubmit={this.handleSubmit}>
//             <label>Image</label>
//             <input type='text' name='image' value={this.state.image} onChange={this.handleChange} />
//             <label>Location</label>
//             <input type='text' name='location' value={this.state.location} onChange={this.handleChange} required />
//             <button type='submit' >UPDATE PROFILE</button>
//           </form>
//         </div>
//       </div>
//     )
//   }
// }
