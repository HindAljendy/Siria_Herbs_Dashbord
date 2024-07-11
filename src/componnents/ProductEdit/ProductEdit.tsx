import React from 'react'
import BigNavigationLinks from '../BigNavigationLinks/BigNavigationLinks'
import EditFormProduct from '../Form/FormEditProduct/EditFormProduct'

const ProductEdit = () => {
  return (
    <>
    <BigNavigationLinks
        navigateMain='تعديل  منتج'
        navigateLinkMain='الواجهة الرئيسية'
        navigateLinkSubmain=' المنتجات'
        navigateSubmain='تعديل '

    />
    <EditFormProduct Name =' تعديل منتج'/>

</>
  )
}

export default ProductEdit