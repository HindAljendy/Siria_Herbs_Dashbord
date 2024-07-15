import React, { useEffect, useState } from 'react'
import './Products.css'
import ProductBox from '../../componnents/ProductBox/ProductBox'
import NavigationLinks from '../../componnents/NavigationLinks/NavigationLinks'
import ProductsOperationsSection from '../../componnents/ProductsOperationsSection/ProductsOperationsSection'
import axios from 'axios'
import { FormProduct } from '../../types/types'
import Pagination from '../../componnents/PaginateItems/Pagination'
import { useNavigate } from 'react-router-dom'



const Products = () => {

  const [products, setProducts] = useState<FormProduct[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  


  const getAllProducts = (currentPage: number) => {
    axios.get(`http://127.0.0.1:8000/api/products?page=${currentPage}`, {
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        setProducts(response.data.data.data);
        setCurrentPage(response.data.data.current_page)
        setTotalItems(response.data.pagination.total)
        setItemsPerPage(response.data.pagination.per_page)
        console.log(response.data.data.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };


  useEffect(() => {
    getAllProducts(currentPage);
  }, [currentPage]);


const token = localStorage.getItem("token");
const navigate = useNavigate();

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
      getAllProducts(currentPage);
    })
    .catch((error) => {
      if (error.response.status === 401) {
        navigate('/login');
      } else {
        console.error(error);
      }
    });
};




const duplicateProduct = (id: number | string) => {
    
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': "application/json",
      },
    };

    axios.post(`http://127.0.0.1:8000/api/products/${id}/duplicate`, {}, config)
      .then((response) => {

        console.log(response.data.data);
        getAllProducts(currentPage);
        console.log(id);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          navigate('/login');
        } else {
          console.error(error);
        }
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
        <Pagination
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Products;