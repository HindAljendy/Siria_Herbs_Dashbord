import React from 'react';
import Selector from '../Selector/Selector';
import './AddProductStyle.css';
import TextArea from '../TextArea/TextArea';
import InputGroup from '../InputGroup/InputGroup';
import ImageUpload from '../ImageUpload/ImageUpload ';



interface AddProductProps {
  name: string;
}

const AddProduct: React.FC<AddProductProps> = ({ name }) => {
  return (
    <form className='form'>
      <div className='form-header'>{name}</div>
      <InputGroup />
      <div className="input">
        <Selector name="الفئة" options={['فئة1', 'فئة2', 'فئة3']} />
        <Selector name="الماركة" options={['ماركة1', 'ماركة2', 'ماركة3']} />
      </div>
      <div className='input'>
        <label htmlFor="name">الاسم</label>
        <input type="text" name="name" id="" />
      </div>
      <TextArea name="وصف المنتج" />
      <TextArea name="وصف المكونات" />
      <ImageUpload />
      {/* <button type="submit">حفظ</button> */}
    </form>
  );
};

export default AddProduct;