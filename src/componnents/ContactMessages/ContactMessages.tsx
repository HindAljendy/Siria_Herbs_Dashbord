import React, { useEffect, useState } from 'react'
import { TTableData } from '../../types/types'
import { getContactMessages } from '../../services/services';

const ContactMessages:React.FC<TTableData>= () => {

const [messages,setMessages] = useState([]);


useEffect(()=>{
   getContactMessages().then((data)=>{
    console.log(data.data)
    setMessages(data.data)
   })
},[])

  return (
    //<div>Hello</div>
    <div>
      {messages.map((message :TTableData)=>{
        return <div>
           <h3>
                {message.full_name}
           </h3>
           <h3>
                {message.email}
           </h3>
           <h3>
                {message.message}
           </h3>
        </div>
      })}
     
    </div>
  );
}

export default ContactMessages
