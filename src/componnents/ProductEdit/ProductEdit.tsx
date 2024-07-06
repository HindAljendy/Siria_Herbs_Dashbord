import React from 'react'
import BigNavigationLinks from '../BigNavigationLinks/BigNavigationLinks'
import FormEditProduct from '../Form/FormEditProduct/FormEditProduct'





const ProductEdit = () => {
   
    return (
        <>
            <BigNavigationLinks
                navigateMain='تعديل  منتج'
                navigateLinkMain='الواجهة الرئيسية'
                navigateLinkSubmain=' المنتجات'
                navigateSubmain='تعديل '

            />
            <FormEditProduct name =' تعديل منتج'/>
        
        </>
    )
}

export default ProductEdit