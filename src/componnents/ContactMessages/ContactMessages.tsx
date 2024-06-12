import React from 'react'
import Table from '../Table/Table'

const ContactMessages = () => {
  return (
    <div className='ra_contact_msg'>
        <Table 
            title="رسائل جهات الاتصال"
            columns={['الاسم', "البريد الإلكتروني","الرسالة","الاجراءات"]}
            data={[
            { user_name: 'رشا بارودي', email:"rasha@gmail.com" ,message: "مرحبا كيف حالكم" },
            
            ]}
        />
    </div>
  )
}

export default ContactMessages
