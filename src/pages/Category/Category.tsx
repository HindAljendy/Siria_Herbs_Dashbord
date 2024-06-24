import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationLinks from '../../componnents/NavigationLinks/NavigationLinks'
import ProductsOperationsSection from '../../componnents/ProductsOperationsSection/ProductsOperationsSection'
// import Table from '../../componnents/Table/Table'
import CategoryTable from '../../componnents/Category/CategoryTable/CategoryTable'

const Category = () => {
  return (
    <>
    <NavigationLinks
          navigateMain='أضف فئة'
          navigateLink='الواجهة الرئيسية' navigateSubmain='الفئات' 
        />
      <ProductsOperationsSection />
      <Outlet/>
      <CategoryTable title={'الفئات'} buttonLabel={'اضف فئة'} columns={['الاسم', 'العلامات التجارية', 'عدد المنتجات', 'تم النشر', 'الإجراءات']} data={[]}/>
    </>
  )
}

export default Category