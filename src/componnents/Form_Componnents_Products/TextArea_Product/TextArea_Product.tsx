
import React from 'react';
import { FormProduct } from '../../../types/types';

interface TextArea {
  name: string;
  formData: FormProduct;
  setFormData: (formData: FormProduct) => void;

}

const TextArea_Product: React.FC<TextArea> = ({ name, formData, setFormData }) => {
  return (
    <div className='input'>
      <label htmlFor="product_description" className="HJ_FontColor_gray"> {name}</label>
      <textarea 
        name="product_description"
        id="product_description"
        value={formData.product_description}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({
          ...formData, product_description: e.target.value
        })}
        className='MA_TextArea'></textarea>
    </div>
  )
}
export default TextArea_Product;
