import React, { useEffect, useState } from 'react'
import CertificaTable from '../Table/CertificaTable'
import axios from 'axios'
import NavigationLinks from '../NavigationLinks/NavigationLinks'
import Pagination from '../PaginateItems/Pagination'

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
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [update, setUpdate] = useState<boolean>(false)

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/certifications?page=${currentPage}`)
      .then(response => {
        setCertifications(response.data.data.data)
        setCurrentPage(response.data.data.current_page)
        setTotalItems(response.data.pagination.total)
        setItemsPerPage(response.data.pagination.per_page)
      })
      .catch(error => console.error(error))
      .finally(() => console.table(certifications));
  }, [update, currentPage])

  // console.log(certifications)
  return (
    <>
      <NavigationLinks
        navigateMain='الشهادات'
        navigateLink='الواجهة الرئيسية' navigateSubmain=' الاعدادات'
      />
      <CertificaTable title="الشهادات" buttonLabel="إضافة شهادة" columns={["الايقونة", "الاسم", "الاسم الفرعي", "الصورة", "الوصف", "الإجرائات"]}
        data={certifications} update={update} setUpdate={setUpdate}
      />
      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </>
  )
}

export default Certificates