import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from '../../componnents/Cards/Cards'
import Cards_withCircleImage from '../../componnents/Cards/Cards_withCircleImage'
import product from '../../assets/images/MainPage/product.png';
import category from '../../assets/images/MainPage/category.png';
import brand from '../../assets/images/MainPage/brandmain.png';
import Footer from '../../componnents/Footer/Footer';


const Main = () => {
  const [productCount, setProductCount] = useState(0);
  const [brandCount, setBrandCount] = useState(0);
  const [categoryCount, setCategoryCount] = useState(0);
  const [brandImages, setBrandImages] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      };

      try {
        const response = await axios.get('http://127.0.0.1:8000/api/main-card', config);
        console.log(response);
        setProductCount(response.data.data.products_count);
        setBrandCount(response.data.data.brands.brands_count);
        setCategoryCount(response.data.data.categories_count);
        setBrandImages(response.data.data.brands.brands_image.map((brand: { main_image: any; }) => brand.main_image));
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='HJ_Content_MainPage'>
      <div style={{ display: 'flex', flexDirection: 'column', gap: "5rem" }}>
        <h2 style={{ color: "#A4C241", fontFamily: "Almarai", fontSize: '3rem' }}>أهلا بك أيها المستخدم</h2>
        <div className='HJ_Cards_MAIN'>
          <div className='HJ_flex_Cards'>
            <Cards title='منتجاتنا' color="#283760" num={productCount} type="منتج" image={product} />
            <Cards_withCircleImage
              title='علاماتنا التجارية'
              num={brandCount}
              color="#A4C241"
              image={brand}
              brandImages={brandImages.length > 0 ? brandImages : []}
            />
            <Cards title='فئات' color="#58B0E0" type="فئة" num={categoryCount} image={category} />
          </div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>


  );
};

export default Main;



