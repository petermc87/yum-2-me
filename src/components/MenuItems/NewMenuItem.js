import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function NewMenuItem ({
  newMenuItem,
  menuHandleChange,
  handleSubmitMenuItem
}) {

  const navigate = useNavigate()

  return (
    <>
      <div className='form-container' id='form-container-edit'>
        <h1>Create your Menu Below</h1>
        <form
          autoComplete='off' onSubmit={(e) => {
            handleSubmitMenuItem(e)
          }}
        >
          <input type='text' name='name' value={newMenuItem.name} onChange={menuHandleChange} placeholder='name' required />
          <input type='text' name='price' value={newMenuItem.price} onChange={menuHandleChange} placeholder='price' required />
          <label>
          <br/>
            Choose a category
            <br/>
            <br/>
            <select type='text' name='category' value={newMenuItem.category} onChange={menuHandleChange}>
              <option value='starter'>Starter</option>
              <option value='main'>Main</option>
              <option value='side'>Side</option>
              <option value='dessert'>Dessert</option>
              <option value='drink'>Drink</option>
            </select>
          </label>
          <div className='create-button'>
            <button type='submit'>CREATE
            </button>
          </div>
        </form>
      </div>

    </>
  )
}


{/* <input type='text' name='name' value={newMenuItem.name} onChange={menuHandleChange} placeholder='name' required />
<input type='text' name='price' value={newMenuItem.price} onChange={menuHandleChange} placeholder='price' required />
<input type='text' name='category' value={newMenuItem.category} onChange={menuHandleChange} placeholder='category' required /> */}