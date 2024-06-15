import React from 'react'
import {  ContactMessagesProps, TTableData } from '../../types/types'
import { Row, Table } from 'react-bootstrap'
import './Messages.css'

const Messages:React.FC<ContactMessagesProps>=  ({title, columns, data,buttons}) => {


  return (


    <>
        <Row className="w-80 contact_msg_table_header ">
          <h2 className="m-4 ">{title}</h2>
        </Row>


            <Table  hover responsive style ={{width : "100%" ,alignItems:"center"}}>
            <thead className='text-center'>
          {columns.map((column:string,index:number)=>{
              return <th className='ra_contact_msg_th' key={index}>{column}</th>
          })}

        </thead>


        <tbody className='ra_contact_msg_body'>
        {data.map((item:TTableData)=>{
          return(
              <tr >

                  <td >{item.full_name}</td>
                  <td>{item.email}</td>
                  <td>{item.message}</td>

              
                  {buttons.map((button)=>{
                    return <td style={{display:"flex"  ,flexDirection:"row"}}> <img src={button.btn_path} alt={button.btn_alt} /></td>
                  })}
              
                 </tr>
                )
              })}
      
              </tbody>
            </Table>
          

    </>
  
  );
}

export default Messages
