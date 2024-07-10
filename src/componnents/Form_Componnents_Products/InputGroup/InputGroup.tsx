import React from 'react'
import './InputGroup.css'
import { FormProduct } from '../../../types/types';

interface InputGroupProps {
  label1: string;
  label2: string;
  label3: string;
  formData: FormProduct;
  setFormData: (formData: FormProduct) => void;
}

const InputGroup: React.FC<InputGroupProps> = ({ label1, label2, label3, formData, setFormData }) => {
  return (
    <div className='HJ_input input-group'>
      <div className='HJ_group'>
        <label htmlFor="name" className='HJ_FontColor_gray'>{label1}</label>
        <input
          type="text"
          name="name"
          id="name"
          className='HJ_width_input'
          value={formData.name}
          onChange={(e : React.ChangeEvent<HTMLInputElement>) => setFormData({
            ...formData, name: e.target.value
          })} />
      </div>
      <div className='HJ_group'>
        <label htmlFor="subname1" className='HJ_FontColor_gray'>{label2}</label>
        <input
          type="text"
          name="subname1"
          id="subname1"
          className='HJ_width_input'
          value={formData.subname1}
          onChange={(e : React.ChangeEvent<HTMLInputElement>) => setFormData({
            ...formData, subname1: e.target.value
          })} />
      </div>
      <div className='HJ_group' >
        <label htmlFor="subname2" className='HJ_FontColor_gray HJ_width_label'>{label3}</label>
        <input
          type="text"
          name="subname2"
          id="subname2"
          className='HJ_width_input'
          value={formData.subname2}
          onChange={(e : React.ChangeEvent<HTMLInputElement>) => setFormData({
            ...formData, subname2: e.target.value
          })} />
      </div>
    </div>
  )
}
export default InputGroup;
