import React, { useState } from 'react';
import './FormAddProduct.css';
import ADD_Photo from './../../../assets/images/Product/Add_Photo_product.svg'
import { FormProduct } from '../../../types/types';
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
import { useNavigate } from 'react-router-dom';




interface AddProductProps {
  name: string;
}

const FormAddProduct: React.FC<AddProductProps> = ({ name }) => {

  const [formData, setFormData] = useState<FormProduct>({
    id: "",
    brand_id: "",
    category_id: "",
    brand_name :"",
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

  const handleButtonClick = () => {
    setShowComponent(true);
  };
   const token = localStorage.getItem("token");
  
  
  const navigate = useNavigate();

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Accept': "application/json",
      'Content-Type': 'multipart/form-data',
    },
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    
    console.log(formData);

    await axios.post('http://127.0.0.1:8000/api/products/create', formData, config)
      .then((response) => {
        setFormData(response.data.data);
        console.log(response.data.data);
        /* window.location.reload(); */
        navigate('/products');
       
      });
  };



  return (
    <form className='form HJ_form_padding HJ_Margin_AddProduct' onSubmit={handleSubmit} >
      <div className='form-header HJ_FontColor_gray HJ_margin_27'>{name}</div>

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
          <SaveButton/>
        </div>

    </form>
  );
};

export default FormAddProduct;
