import React, { useEffect, useState } from 'react'
import Messages from '../../componnents/ContactMessages/Messages'
import { TTableData } from '../../types/types';
import { getContactMessages } from '../../services/services';
import ShowMessage from '../../componnents/ContactMessages/ShowMessage/ShowMessage';
import axios from 'axios';
import NavigationLinks from '../../componnents/NavigationLinks/NavigationLinks';
import Pagination from '../../componnents/PaginateItems/Pagination';





const ContactMessages = () => {

  const [messages, setMessages] = useState<TTableData[]>([]);
  const [showedMessage, setShowedMessage] = useState(false);
  const [messageToshow, setMessageToShow] = useState<string | undefined>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const token = localStorage.getItem("token");

 
  const columns = ['اسم المستخدم', 'البريد الالكتروني', 'الرسالة', 'الإجراءات']
  const config = {
    headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
    },
};

  const buttons = [

    {
      btn_path: 'src/assets/images/button_icon/delete.svg',
      btn_alt: 'delete icon',
      handlefunc: ((itemId: number) => {
        axios.delete(`http://127.0.0.1:8000/api/deleteContactMessage/${itemId}`,config)
        setMessages(messages.filter((message) => message.id != itemId))
        console.log("Delete Message Sucessfully");
      })


    },

    {
      btn_path: 'src/assets/images/button_icon/show.svg',
      btn_alt: 'show icon',
      handlefunc: ((itemId: number) => {
        axios.get(`http://127.0.0.1:8000/api/showContactMessage/${itemId}`,config)
        setMessageToShow(messages.find(item => item.id === itemId)?.message)
        setShowedMessage(true) 
        console.log("sucessfully");
        

      })
    }
  ]


  useEffect(() => {
    getContactMessages(currentPage).then((data) => {
      setMessages(data.data.data)
      setCurrentPage(data.data.current_page)
      setTotalItems(data.pagination.total)
      setItemsPerPage(data.pagination.per_page)
    })
  }, [currentPage])
  return (
    <>

      <NavigationLinks navigateMain='رسائل جهات الاتصال'
        navigateLink='الواجهة الرئيسية'
        navigateSubmain='رسائل جهات الاتصال' />

      <Messages
        columns={columns}
        data={messages}
        buttons={buttons} 
      />

      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
      {showedMessage && <ShowMessage message={messageToshow} closeMessage={() => setShowedMessage(false)} />
      }
    </>
  )
}

export default ContactMessages