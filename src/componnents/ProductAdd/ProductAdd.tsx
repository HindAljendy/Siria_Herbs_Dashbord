import React from 'react'
import BigNavigationLinks from '../BigNavigationLinks/BigNavigationLinks'
import FormAddProduct from '../Form/FormAddProduct/FormAddProduct'



const ProductAdd = () => {
    return (
        <>
            <BigNavigationLinks
                navigateMain='اضافة منتج'
                navigateLinkMain='الواجهة الرئيسية'
                navigateLinkSubmain=' المنتجات'
                navigateSubmain='اضافة '

            />
            <FormAddProduct name='اضافة منتج'/>
        
        </>
    )
}

export default ProductAdd