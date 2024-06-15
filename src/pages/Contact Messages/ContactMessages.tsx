import React, { useEffect, useState } from 'react'
import Messages from '../../componnents/ContactMessages/Messages'
import { TTableData } from '../../types/types';
import { getContactMessages } from '../../services/services';


const title='الرسائل'

const columns=['اسم المستخدم','البريد الالكتروني','الرسالة','الإجراءات']


const buttons=[
  {btn_path:'src/assets/images/button_icon/delete.svg',btn_alt:'delete icon'},
  {btn_path:'src/assets/images/button_icon/edite.svg',btn_alt:'show icon'}
]



const ContactMessages = () => {

  const [messages,setMessages] = useState<TTableData[]>([]);

  useEffect(()=>{
    getContactMessages().then((data)=>{
     console.log(data.data)
     setMessages(data.data)
    })
 },[])
  return (
    <div>
        <Messages
         title={title}
         columns={columns}
         data={messages}
         buttons={buttons}

         />
    </div>
  )
}

export default ContactMessages