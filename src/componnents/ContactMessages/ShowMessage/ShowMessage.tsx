import React from 'react'
import './ShowMessage.css'

 
function ShowMessage({message,closeMessage}) {
  return (
    <div className='show-msg-container' onClick={closeMessage}>
        <div className="show-msg">
        
      <label htmlFor="description"> الرسالة </label>
      <textarea name="description" id="description">{message}</textarea>
        </div>
    
    </div>
  )
}

export default ShowMessage
