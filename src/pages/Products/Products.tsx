import React, { useEffect, useState } from 'react'
import './Products.css'
import ProductBox from '../../componnents/ProductBox/ProductBox'
import NavigationLinks from '../../componnents/NavigationLinks/NavigationLinks'
import ProductsOperationsSection from '../../componnents/ProductsOperationsSection/ProductsOperationsSection'
import axios from 'axios'
import { FormProduct } from '../../types/types'


const Products = () => {
  const [products, setProducts] = useState<FormProduct[]>([]);


  const getAllProducts = () => {
    axios.get('http://127.0.0.1:8000/api/products', {
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        setProducts(response.data.data.data);
        console.log(response.data.data.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };


  useEffect(() => {
    getAllProducts();
  }, []);


  const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzIwMjU2Nzc0LCJleHAiOjE3MjAyNjAzNzQsIm5iZiI6MTcyMDI1Njc3NCwianRpIjoiaExjcWoxenJiQTNrVUh1NCIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.6fy9DZyzfoEMr3dEnFnucogvhyZcuissxQW7WIvfx3s';

  const deleteProduct = (id: number | string) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    };

    axios
      .delete(`http://127.0.0.1:8000/api/products/${id}`, config)
      .then((response) => {
        
        console.log(response.data);
        console.log(id);
        getAllProducts();
      })
      .catch((error) => {
        console.error("Error Delete Product: ", error);
      });
  };



  const duplicateProduct = (id: number | string) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    };
  
    axios.post(`http://127.0.0.1:8000/api/products/${id}/duplicate`, {}, config)
      .then((response) => {

        console.log(response.data.data);
        getAllProducts();
        console.log(id);
      })
      .catch((error) => {
        console.error("Error Duplicate Product: ", error);
      });
  };


  return (

    <div className="HJ_MarginBottom">
      <NavigationLinks
        navigateMain="المنتجات"
        navigateLink="الواجهة الرئيسية"
        navigateSubmain="المنتجات"
      />

      <ProductsOperationsSection />

      <div className="HJ_AllProducts">
        <div className="d-flex  HJ_gap">
          {products.map((product, index) => (
            <ProductBox
              key={index}
              img={product.main_image}
              title_1={product.name}
              title_2={product.subname1}
              title_3={product.subname2}
              brandName={product.brand_name}
              productNum={product.id}
              weight={product.weight}
              packaging={product.packaging_description}
              numInPackage={product.count_each_package}
              onDelete={() => deleteProduct(product.id)}
              onDuplicate={() => duplicateProduct(product.id)}

            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;