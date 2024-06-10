import './App.css'
import React from 'react';
import Navbar from './componnents/Navbar/Navbar'
import ProductBox from './componnents/ProductBox/ProductBox'
import img from './assets/images/Product/product_01.png'
import Table from './componnents/Table/Table';
import IMG_brand_table1 from './assets/images/category/Brand_GreenGold_logo.svg'
import IMG_brand_table2 from './assets/images/category/Layer 1.png'

function App() {

  return (
    <>
    {/* neven Section : */}
      <Navbar />
      <ProductBox img={img} title_1="للتنحيف و انقاص الوزن"
        title_2="شاي اخضر سوري مع التوت البري" 
        title_3="خلطة طبيعية و مدعمة للتنحيف و انقاص الوزن" 
        brandName="a vie" productNum={8} weight="55G" encapsolation="معبأة في كيس نايلون وعلبة كرتون خاصة" 
        numInPackage={10} 
      />


     {/* Nawar Section : */}
      <Table 
      title="العلامة التجارية"
      buttonLabel=" اضافة ماركة"
      columns={['الاسم', "صورة المنتج", 'عدد المنتجات', 'PUBLISHED' , "الاجراءات"]}
      data={[
      { name: 'صحتك ذهب ', image:IMG_brand_table1 , quantity: 1, published: true },
      { name: 'أوغارو ', image: IMG_brand_table2, quantity: 2, published: true },
      { name: 'أوغارو ', image: IMG_brand_table2, quantity: 2, published: true },
      { name: 'أوغارو ', image: IMG_brand_table2, quantity: 2, published: false},
      ]}
      />



      
    </>
  )
}

export default App
