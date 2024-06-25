
import React from 'react';
import { Outlet} from 'react-router-dom';
import Sidebar from './componnents/Sidebar/SideBar';
import './App.css'
import Navbar from './componnents/Navbar/Navbar';


const App: React.FC = () => {
  return (

   <>
      <Navbar />
      <div className='HJ_container'>
        <div><Sidebar /></div>
        
        <div className='HJ_outlet'>
          <Outlet />
        </div>
      </div>  
     


      {/* Rasha Section : */}


      

      {/* neven Section : */}
      {/* <Navbar />
      <ProductBox img={img} title_1="للتنحيف و انقاص الوزن"
        title_2="شاي اخضر سوري مع التوت البري"
        title_3="خلطة طبيعية و مدعمة للتنحيف و انقاص الوزن"
        brandName="a vie" productNum={8} weight="55G" encapsolation="معبأة في كيس نايلون وعلبة كرتون خاصة"
        numInPackage={10}
      /> */}


      {/* Nawar Section : */}
      {/*   <Table
        title="العلامة التجارية"
        buttonLabel=" اضافة ماركة"
        columns={['الاسم', "صورة المنتج", 'عدد المنتجات', 'PUBLISHED', "الاجراءات"]}
        data={[
          { name: 'صحتك ذهب ', image: IMG_brand_table1, quantity: 1, published: true },
          { name: 'أوغارو ', image: IMG_brand_table2, quantity: 2, published: true },
          { name: 'أوغارو ', image: IMG_brand_table2, quantity: 2, published: true },
          { name: 'أوغارو ', image: IMG_brand_table2, quantity: 2, published: false },
        ]}
      /> */}


      {/* Mohammed Section */}
      {/* 
          <Form/>
          <AddProduct name="إضافة منتج"/>
      */}
        
        {/* section Maya */}
        {/*  <Delete_Popup/>
          <Cards title="فئات" num="25" color=" #58b0e0" type="فئة" image={category} />
          <Cards_withCircleImage title="علاماتنا التجارية" num="25" color=" #A4C241"  image={brandmain}/>
          <Footer/> */}


  </>


  );
}

export default App;
