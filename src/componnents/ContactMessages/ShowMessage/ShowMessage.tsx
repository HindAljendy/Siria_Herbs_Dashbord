import React from 'react'
import './ShowMessage.css'

interface ShowMessage {
message:string | undefined;
closeMessage:()=>void;
}
 
  const ShowMessage: React.FC<ShowMessage> = ({message,closeMessage}) => {
  return (
    <div className='show-msg-container' onClick={closeMessage}>
        <div className="show-msg">
        
      <label htmlFor="description"> الرسالة </label>
      <textarea name="description" id="description" value={message} readOnly></textarea>
        </div>
    
    </div>
  )
}

export default ShowMessage
