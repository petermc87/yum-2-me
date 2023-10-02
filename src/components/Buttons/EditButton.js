import React from 'react'

export default function EditButton ({
  setShowForm
}) {
  return (
    <>
      <div className='button-container'>
        <button onClick={(e) => {
          setShowForm(true)
        }}
        > &#x270E;
        </button>
      </div>
    </>
  )
}
