import React from 'react'
import CategoryForm from '../Category/CategoryForm'
import BigNavigationLinks_Categories from '../BigNavigationLinks/BigNavigationLinks_Categories'

const AddCategory = () => {
  return (
    <>
      <BigNavigationLinks_Categories
        navigateMain='  أضف فئة'
        navigateLinkMain='الواجهة الرئيسية'
        navigateLinkSubmain=' الفئات'
        navigateSubmain='اضافة '

      />
      <CategoryForm TitleCategory="اضافة فئة الى النظام"/>
    </>
  )
}

export default AddCategory