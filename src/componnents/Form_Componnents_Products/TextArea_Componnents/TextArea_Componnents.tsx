
import React from 'react';
import { FormProduct } from '../../../types/types';

interface TextArea {
  name: string;
  formData: FormProduct;
  setFormData: (formData: FormProduct) => void;

}

const TextArea_Componnents: React.FC<TextArea> = ({ name, formData, setFormData }) => {
  return (
    <div className='input'>
      <label htmlFor="description_component" className="HJ_FontColor_gray"> {name}</label>
      <textarea
        name="description_component"
        id="description_component"
        value={formData.description_component}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({
          ...formData, description_component: e.target.value
        })} className='MA_TextArea'></textarea>
    </div>
  )
}
export default TextArea_Componnents;
