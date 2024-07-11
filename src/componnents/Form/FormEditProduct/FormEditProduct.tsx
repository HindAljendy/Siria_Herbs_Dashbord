import React, { useEffect, useState } from 'react';
import { FormProduct } from '../../../types/types';
import ADD_Photo from './../../../assets/images/Product/Add_Photo_product.svg'

import axios from 'axios';
import InputGroup from '../../Form_Componnents_Products/InputGroup/InputGroup';
import SelectorCategory_Products from '../../Form_Componnents_Products/SelectorCategory_Products/SelectorCategory_Products';
import SelectorBrands_products from '../../Form_Componnents_Products/SelectorBrands_products/SelectorBrands_products';
import TextArea_Product from '../../Form_Componnents_Products/TextArea_Product/TextArea_Product';
import InputGroup_Product from '../../Form_Componnents_Products/InputGroup_Product/InputGroup_Product';
import TextArea_Encapsulation from '../../Form_Componnents_Products/TextArea_packaging/TextArea_Packaging';
import TextArea_Componnents from '../../Form_Componnents_Products/TextArea_Componnents/TextArea_Componnents';
import ImageUpload_ProductsMainImage from '../../Form_Componnents_Products/ImageUpload_Products/ImageUpload_ProductsMainImage';
import ImageUpload_AdditionalImage from '../../Form_Componnents_Products/ImageUpload_Products/ImageUpload_AdditionalImage';
import SaveButton from '../Buttons/SaveButton';
import { useParams } from 'react-router-dom';



interface AddProductProps {
  Name: string;

}

const FormEditProduct: React.FC<AddProductProps> = ({ Name }) => {


  const { productNum } = useParams();


  const [formData, setFormData] = useState<FormProduct>({
    id: "",
    brand_id: "",
    category_id: "",
    brand_name: "",
    name: "",
    subname1: "",
    subname2: "",
    product_description: "",
    code_number: "",
    weight: "",
    packaging_description: "",
    description_component: "",
    count_each_package: "",
    main_image: null,
    additional_image: null,
  });
  
  const [showComponent, setShowComponent] = useState<boolean>(false);


  useEffect(() => {

    axios.get(`http://127.0.0.1:8000/api/products/${productNum}`, {
      headers: {
        'Accept': "application/json",
      },
    })
      .then((response) => {
        setFormData({
          ...formData,
          id:                    response.data.data.id,
          brand_id:              response.data.data.brand_id,
          category_id:           response.data.data.category_id,
          brand_name:            response.data.data.brand_name,
          name:                  response.data.data.name,
          subname1:              response.data.data.subname1,
          subname2:              response.data.data.subname2,
          product_description:   response.data.data.product_description,
          code_number:           response.data.data.code_number,
          weight:                response.data.data.weight,
          packaging_description: response.data.data.packaging_description,
          description_component: response.data.data.description_component,
          count_each_package:    response.data.data.count_each_package,
          main_image: null,
          additional_image: null,
        })
      })
      .catch((error) => {
        console.log('Error:', error);
      });
    console.log('the name is', formData.name);

  }, [productNum]);



  const handleButtonClick = () => {
    setShowComponent(true);
  };
  /*  const token = localStorage.getItem("token");  */
  const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzIwMzEzODAxLCJleHAiOjE3MjAzMTc0MDEsIm5iZiI6MTcyMDMxMzgwMSwianRpIjoiV2hHRVFZOVpCUmVkdGp3aiIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.F6W1QbgH7XgyJkeLd-RxurlILTJ1hIG_fqFxfdBrhhI';


  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Accept': "application/json",
      'Content-Type': 'multipart/form-data',
    },
  };

  const EditProduct = async (event: any) => {
    event.preventDefault();

    const formDataUpdate = new FormData();

    formDataUpdate.append('brand_id', String(formData.brand_id));
    formDataUpdate.append('category_id', String(formData.category_id));
    formDataUpdate.append('name', String(formData.name));
    formDataUpdate.append('subname1', String(formData.subname1));
    formDataUpdate.append('subname2', String(formData.subname2));
    formDataUpdate.append('product_description', String(formData.product_description));
    formDataUpdate.append('code_number', String(formData.code_number));
    formDataUpdate.append('weight', String(formData.weight));
    formDataUpdate.append('packaging_description', String(formData.packaging_description));
    formDataUpdate.append('description_component', String(formData.description_component));
    formDataUpdate.append('count_each_package', String(formData.count_each_package));
    if (formData.main_image) {
      formDataUpdate.append('main_image', formData.main_image);
    }

    if (formData.additional_image) {
      formDataUpdate.append('additional_image', formData.additional_image);
    }
    formDataUpdate.append('_method', 'PUT');

    await axios.post(`http://127.0.0.1:8000/api/products/${productNum}`, formDataUpdate, config)
      .then((response) => {
        /*    setFormDataUpdate(response.data.data);  */
        console.log(response.data.data);

      })
      .catch((error) => {
        console.log('Error:', error);
      });

  };



  return (
    <form className='form HJ_form_padding HJ_Margin_AddProduct' onSubmit={EditProduct} >
      <div className='form-header HJ_FontColor_gray HJ_margin_27'>{Name}</div>

      <InputGroup label1='الاسم'
        label2='الاسم الفرعي 1' label3='الاسم الفرعي 2'
        formData={formData} setFormData={setFormData} />

      <div className=" HJ_groups_Selectors">
        <SelectorCategory_Products name="الفئة"
          formData={formData} setFormData={setFormData}
        />

        <SelectorBrands_products name="الماركة"
          formData={formData} setFormData={setFormData}
        />
      </div>

      <TextArea_Product name="وصف المنتج"
        formData={formData} setFormData={setFormData} />

      <InputGroup_Product label1='كود المنتج'
        label2='إضافة الوزن' label3='إضافة العدد في العبوة'
        formData={formData} setFormData={setFormData} />

      <TextArea_Encapsulation name="وصف التغليف"
        formData={formData} setFormData={setFormData} />

      <TextArea_Componnents name="وصف المكونات"
        formData={formData} setFormData={setFormData} />

      <ImageUpload_ProductsMainImage name='الصورة الرئيسية'
        formData={formData} setFormData={setFormData} />

      <div className='HJ_Button_AddPhoto'>

        {!showComponent &&

          <button onClick={handleButtonClick} type='button'>
            <span>اضافة</span>
            <img src={ADD_Photo} alt="ADD Photo" />
          </button>

        }
      </div>

      {showComponent && (
        <ImageUpload_AdditionalImage name='صورة اضافية'
          formData={formData} setFormData={setFormData} />)}

      <div className='HJ_container_Button'>
        <SaveButton />
      </div>

    </form>
  );
};

export default FormEditProduct;
