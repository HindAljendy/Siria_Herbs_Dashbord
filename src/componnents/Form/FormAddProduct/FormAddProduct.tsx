import React from 'react';
import './FormAddProduct.css';
import ADD_Photo from './../../../assets/images/Product/Add_Photo_product.svg'
import TextArea from '../TextArea/TextArea';
import Selector from '../Selector/Selector';
import ImageUpload from '../ImageUpload/ImageUpload ';
import SelectorCategory from '../../SelectorCategory/SelectorCategory';
import InputGroup from '../InputGroup/InputGroup';
import { Link } from 'react-router-dom';
import SaveButton from '../Buttons/SaveButton';




interface AddProductProps {
  name: string;
}

const FormAddProduct: React.FC<AddProductProps> = ({ name }) => {
  return (
    <form className='form HJ_form_padding HJ_Margin_AddProduct'>
      <div className='form-header HJ_FontColor_gray HJ_margin_27'>{name}</div>
      <InputGroup label1='الاسم' label2='الاسم الفرعي 1' label3='الاسم الفرعي 2'  />
      <div className=" HJ_groups_Selectors">
        <SelectorCategory name="الفئة" />
        <Selector name="الماركة" /> 
      </div>
      <TextArea name="وصف المنتج" />
      <InputGroup label1='كود المنتج' label2='إضافة الوزن' label3='إضافة العدد في العبوة'  />
      <TextArea name="وصف التغليف" />
      <TextArea name="وصف المكونات" />
      <ImageUpload name='الصورة الرئيسية' /> 
      <div className='HJ_Button_AddPhoto'>
        <label>صورة إضافية</label>
        <Link to="">
          <button>
            <span>اضافة</span>
            <img src={ADD_Photo} alt="ADD Photo" />
          </button>
        </Link>
      </div>
      <div className='HJ_container_Button'>
        <SaveButton />
      </div>
    
    </form>
  );
};

export default FormAddProduct;