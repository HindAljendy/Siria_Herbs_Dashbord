import React from 'react'
import SettingsAbout from '../../componnents/SettingAbout/SettingsAbout'
// import Certifica from '../../componnents/Form/CertificaForm/Certifica'
// import CertificaTable from '../../componnents/Table/CertificaTable'

const Main = () => {
  return (
    <div>
      <h1>Main</h1>
      <SettingsAbout/>
      {/* <Certifica/>
      <CertificaTable title="الشهادات" buttonLabel="إضافة شهادة"  columns={["الايقونة" , "الاسم" ,"الاسم الفرعي" ,"الصورة" , "الوصف","الإجرائات"]}  
      data={
        [
          {
            name : 'mohamad' , image : 'ddad.jpg'
          },
        ]
      }
        /> */}
    </div>
  )
}

export default Main
