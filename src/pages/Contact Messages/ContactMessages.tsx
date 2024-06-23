import React, { useEffect, useState } from 'react'
import Messages from '../../componnents/ContactMessages/Messages'
import { TTableData } from '../../types/types';
import { getContactMessages } from '../../services/services';
import ShowMessage from '../../componnents/ContactMessages/ShowMessage/ShowMessage';
import axios from 'axios';





const ContactMessages = () => {

  const [messages,setMessages] = useState<TTableData[]>([]);
  const [showedMessage,setShowedMessage] = useState (false);
 const [messageToshow,setMessageToShow]=useState<string | undefined>('');


    const title='الرسائل'

    const columns=['اسم المستخدم','البريد الالكتروني','الرسالة','الإجراءات']


    const buttons=[

      {btn_path:'src/assets/images/button_icon/delete.svg',
        btn_alt:'delete icon',
        handlefunc: ((itemId:number)=>{
             axios.delete(`http://127.0.0.1:8000/api/deleteContactMessage/${itemId}`)
                setMessages(messages.filter((message)=>message.id != itemId))
                 
        })
        
          
    },

      {btn_path:'src/assets/images/button_icon/show.svg',
        btn_alt:'show icon',
        handlefunc:((itemId:number)=>
          { 
                      
            setMessageToShow(messages.find(item=>item.id === itemId)?.message) 
            setShowedMessage(true)

        })
      }
    ]

 

  useEffect(()=>{
    getContactMessages().then((data)=>{
     setMessages(data.data.data)
    })
 },[])
  return (
    <div>

        <Messages
         title={title}
         columns={columns}
         data={messages}
         buttons={buttons} />
         {showedMessage &&<ShowMessage message={messageToshow} closeMessage={()=>setShowedMessage(false)}/>
}    </div>
  )
}

export default ContactMessages