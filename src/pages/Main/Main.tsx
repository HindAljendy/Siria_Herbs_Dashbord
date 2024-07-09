import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from '../../componnents/Cards/Cards'
import Cards_withCircleImage from '../../componnents/Cards/Cards_withCircleImage'
import product from '../../assets/images/MainPage/product.png';
import category from '../../assets/images/MainPage/category.png';
import brand from '../../assets/images/MainPage/brandmain.png';

const Main = () => {
  const [productCount, setProductCount] = useState(0);
  const [brandCount, setBrandCount] = useState(0);
  const [categoryCount, setCategoryCount] = useState(0);
  const [brandImages, setBrandImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/main-card');
        setProductCount(response.data.products_count);
        setBrandCount(response.data.brands.brands_count);
        setCategoryCount(response.data.categories_count);
        setBrandImages(response.data.brands.brands_image.map((brand: { main_image: any; }) => brand.main_image));
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: "5rem" }}>
      <h2 style={{ color: "#A4C241", fontFamily: "Almarai", fontSize: '3rem' }}>أهلا بك أيها المستخدم</h2>
      <div style={{ display: 'flex', gap: "4rem" }}>
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
  );
};

export default Main;



