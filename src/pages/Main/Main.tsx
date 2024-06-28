import React from 'react'
import Certifica from '../../componnents/Form/CertificaForm/Certifica'
import CertificaTable from '../../componnents/Table/CertificaTable'

const Main = () => {
  return (
    <div>
      main
      <Certifica/>
      <CertificaTable title="الشهادات" buttonLabel="إضافة شهادة"  columns={["الايقونة" , "الاسم" ,"الاسم الفرعي" ,"الصورة" , "الوصف","الإجرائات"]}  
      data={
        [
          {
            name : 'mohamad' , image : 'ddad.jpg'
          },
        ]
      }
        />
    </div>
  )
}

export default Main
