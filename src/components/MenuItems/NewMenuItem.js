import { Link, useNavigate } from 'react-router-dom'
// import { useState, useEffect } from 'react'
// import MenuItem from '../../components/MenuItems/MenuItem'
// import { Navigate } from 'react-router-dom'

export default function NewMenuItem ({
  createMenuItem,
  newMenuItem,
  menuHandleChange,
  getMenuItems,
  handleSubmitMenuItem
}) {
  const navigate = useNavigate()

  return (
    <>

      <div className='form-container' id='form-container-profile'>
        <h1>Create your Menu Below</h1>
        <form
          autoComplete='off' onSubmit={(e) => {
            handleSubmitMenuItem(e)
          }}
        >
          <input type='text' name='name' value={newMenuItem.name} onChange={menuHandleChange} placeholder='name' required />
          <input type='text' name='price' value={newMenuItem.price} onChange={menuHandleChange} placeholder='price' required />
          <input
            type='text' name='category' value={newMenuItem.category} onChange={menuHandleChange} placeholder='category' required
          />
          <div className='create-button'>
            <button type='submit'>CREATE
            </button>
          </div>
        </form>
      </div>

    </>
  )
}
