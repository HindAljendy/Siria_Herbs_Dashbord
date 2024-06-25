import React from 'react'
import './InputGroup.css'

interface InputGroupProps {
  label1: string;
  label2: string;
  label3: string;
}

const InputGroup: React.FC<InputGroupProps> = ({ label1 , label2 , label3 }) => {
  return (
    <div className='HJ_input input-group'>
      <div className='HJ_group'>
        <label htmlFor="name" className='HJ_FontColor_gray'>{label1}</label>
        <input type="text" name="name" id="" className='HJ_width_input' />
      </div>
      <div className='HJ_group'>
        <label htmlFor="name1" className='HJ_FontColor_gray'>{label2}</label>
        <input type="text" name="name1" id="" className='HJ_width_input'/>
      </div>
      <div className='HJ_group' >
        <label htmlFor="name2" className='HJ_FontColor_gray HJ_width_label'>{label3}</label>
        <input type="text" name="name2" id="" className='HJ_width_input' />
      </div>
    </div>
  )
}
export default InputGroup;
