import React, { useEffect, useState } from 'react';
import ADD_Photo from './../../../assets/images/Product/Add_Photo_product.svg'
import { FormUpdateProduct, FormProduct } from '../../../types/types';
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
  name: string;

}

const FormEditProduct: React.FC<AddProductProps> = ({ name }) => {

  const [formData, setFormData] = useState<FormProduct>({
    id:"",
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
  const [formDataUpdate, setFormDataUpdate] = useState<FormUpdateProduct>({
    id: formData.id,
    brand_id: formData.brand_id,
    category_id: formData.category_id ,
    brand_name:formData.brand_name  ,
    name: formData.name ,
    subname1: formData.subname1 ,
    subname2:formData.subname2 ,
    product_description:formData.product_description ,
    code_number: formData.code_number,
    weight:formData.weight ,
    packaging_description:formData.packaging_description ,
    description_component: formData.description_component ,
    count_each_package:formData.count_each_package ,
    main_image: null,
    additional_image: null,
    _method: "PUT", 

    
  });
  const [showComponent, setShowComponent] = useState<boolean>(false);
  /*  const params = useParams(); */





  const { productNum } = useParams();

  useEffect(() => {

    axios.get(`http://127.0.0.1:8000/api/products/${productNum}`, {
      headers: {
        'Accept': "application/json",
      },
    })
      .then((response) => {
        console.log(productNum);
        setFormData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });

  }, []); 

  const handleButtonClick = () => {
    setShowComponent(true);
  };
  /*  const token = localStorage.getItem("token");  */
  const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzIwMjY3MTM1LCJleHAiOjE3MjAyNzA3MzUsIm5iZiI6MTcyMDI2NzEzNSwianRpIjoibHNROTFMNGp1MGJ3cmFBSiIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.VeJ6Nz6AvITM7-sGelkwQOksnPhWx0XV_A0zmhlnhNc';


  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Accept': "application/json",
      'Content-Type': 'multipart/form-data',
    },
  };

  const EditProduct = async (event: any) => {
    event.preventDefault();
    let newData ={

      brand_id: (formDataUpdate.brand_id) ?  formDataUpdate.brand_id : formData.brand_id,
      category_id:  (formDataUpdate.category_id) ?  formDataUpdate.category_id : formData.category_id,
      brand_name : (formDataUpdate.brand_name) ? formDataUpdate.brand_name  : formData.brand_name,
      name:  (formDataUpdate.name) ?  formDataUpdate.name : formData.name,
      subname1:  (formDataUpdate.subname1) ?  formDataUpdate.subname1 : formData.subname1,
      subname2: (formDataUpdate.subname2) ?  formDataUpdate.subname2 : formData.subname2,
      product_description:  (formDataUpdate.product_description) ?  formDataUpdate.product_description  : formData.product_description,
      code_number: (formDataUpdate.code_number) ?  formDataUpdate.code_number   : formData.code_number,
      weight: (formDataUpdate.weight) ?  formDataUpdate.weight  : formData.weight,
      packaging_description: (formDataUpdate.packaging_description) ?  formDataUpdate.packaging_description  : formData.packaging_description,
      description_component: (formDataUpdate.description_component) ? formDataUpdate.description_component  : formData.description_component,
      count_each_package:   (formDataUpdate.count_each_package) ? formDataUpdate.count_each_package  : formData.count_each_package,
      main_image: null ,
      additional_image: null,
      _method: "PUT",
      
    }   
    /* const method = "PUT"; */
    console.log(newData);

    await axios.put(`http://127.0.0.1:8000/api/products/${productNum}`, newData, config)
      .then((response) => {
        setFormDataUpdate(response.data.data);
        console.log(response.data.data);

      })
      .catch((error) => {
        console.log('Error:', error);
      });
      
  };



  return (
    <form className='form HJ_form_padding HJ_Margin_AddProduct' onSubmit={EditProduct}  >
      <div className='form-header HJ_FontColor_gray HJ_margin_27'>{name}</div>
 
      <InputGroup label1='الاسم'
        label2='الاسم الفرعي 1' label3='الاسم الفرعي 2'
        formData={formData} setFormData={setFormData}/> 

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
