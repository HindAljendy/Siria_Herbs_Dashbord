
import React from 'react';
import { Outlet} from 'react-router-dom';
import Sidebar from './componnents/Sidebar/SideBar';
import './App.css'
import Navbar from './componnents/Navbar/Navbar';
import SettingsAbout from './componnents/SettingAbout/SettingsAbout';
import Form from './componnents/Form/Form';
import InputGroup from './componnents/Form/InputGroup/InputGroup';
import TextArea from './componnents/Form/TextArea/TextArea';
import ImageUpload from './componnents/Form/ImageUpload/ImageUpload ';


/* import Form from './componnents/Form/Form'
import AddProduct from './componnents/Form/AddProduct.tsx/AddProduct' 
import ProductBox from './componnents/ProductBox/ProductBox'
import img from './assets/images/Product/product_01.png'
import Table from './componnents/Table/Table';
import IMG_brand_table1 from './assets/images/category/Brand_GreenGold_logo.svg'

import IMG_brand_table2 from './assets/images/category/Layer 1.png'
import ContactMessages from './componnents/ContactMessages/ContactMessages';
import { TTableData } from './types/types';
import IMG_brand_table2 from './assets/images/category/Layer 1.png'*/ 
/* import Delete_Popup from './componnents/Delete_Popup/Delete_Popup'
import category from './assets/images/MainPage/category.png'
import brandmain from './assets/images/MainPage/brandmain.png'
import Cards from './componnents/Cards/Cards'
import Footer from './componnents/Footer/Footer'
import Cards_withCircleImage from './componnents/Cards/Cards_withCircleImage' */



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
