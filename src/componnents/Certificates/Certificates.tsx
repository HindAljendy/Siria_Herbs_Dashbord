import React, { useEffect, useState } from 'react'
import CertificaTable from '../Table/CertificaTable'
import axios from 'axios'
import NavigationLinks from '../NavigationLinks/NavigationLinks'

type TCertificate = {
  id: number
  icon: string;
  name: string;
  subname: string;
  photo: string;
  description: string;
}

const Certificates = () => {

  const [certifications, setCertifications] = useState<TCertificate[]>([]);
  const [update, setUpdate] = useState<boolean>(false)

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/certifications")
    .then(response => setCertifications(response.data.data.data))
    .catch(error => console.error(error))
    .finally(()=>console.table(certifications));
  }, [update])
  
  // console.log(certifications)
  return (
    <>
    <NavigationLinks
        navigateMain='الشهادات'
        navigateLink='الواجهة الرئيسية' navigateSubmain=' الاعدادات'
      />
      <CertificaTable title="الشهادات" buttonLabel="إضافة شهادة" columns={["الايقونة", "الاسم", "الاسم الفرعي", "الصورة", "الوصف", "الإجرائات"]}
        data={ certifications} update={update} setUpdate={setUpdate}
      />
    </>
  )
}

export default Certificates