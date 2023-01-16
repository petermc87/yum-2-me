import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

export default function EditButton ({
  setShowForm
}) {


return(
    <>
      <div className='button-container'>
         <button onClick={(e) => {
            setShowForm(true)}}> &#x270E;
         </button>
      </div>
    </>  
  )
}



// const [showModal, setShowModal] = useState(false)

// const handleClose = () => setShowModal(false)
// const handleShow = () => setShowModal(true)

{/* <Button variant='primary' onClick={handleShow}>
&#x270E;
</Button> */}

{/* <Modal className='edit-modal' show={showModal} onHide={handleClose}>
<Modal.Header>
  <Modal.Title>Edit Restaurant</Modal.Title>
</Modal.Header>
<Modal.Body>
  <form>
    <input placeholder='name'></input>
    <input placeholder='location'></input>
    <button type='submit'>
        Edit Restaurant
    </button>
  </form>
</Modal.Body>
<Modal.Footer>
  <Button variant='secondary' onClick={handleClose}>
    Close
  </Button>
</Modal.Footer>
</Modal> */}
