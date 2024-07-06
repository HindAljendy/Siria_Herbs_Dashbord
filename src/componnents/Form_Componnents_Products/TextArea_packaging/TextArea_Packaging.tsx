
import React from 'react';
import { FormProduct } from '../../../types/types';

interface TextArea {
  name: string;
  formData: FormProduct;
  setFormData: (formData: FormProduct) => void;

}

const TextArea_Encapsulation: React.FC<TextArea> = ({ name, formData, setFormData }) => {
  return (
    <div className='input'>
      <label htmlFor="packaging_description" className="HJ_FontColor_gray"> {name}</label>
      <textarea
        name="packaging_description"
        id="packaging_description"
        value={formData.packaging_description}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({
          ...formData, packaging_description: e.target.value
        })} className='MA_TextArea'></textarea>
    </div>
  )
}
export default TextArea_Encapsulation;
