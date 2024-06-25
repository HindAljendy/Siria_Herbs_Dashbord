import React, { useState } from 'react';

interface SelectorProps {
  name: string;

}

const Selector: React.FC<SelectorProps> = ({ name }) => {

  const [color, setColor] = useState('gray'); 
  const handleChange = () => {  
    setColor("var(--blue-color)");
  }

  return (
    <div className='input HJ_width_select'>
      <label htmlFor="brand" className='HJ_FontColor_blue'>{name}</label>
      <select name="brad" id="brad" onChange={handleChange} style={{ color: color }}>
        <option value="" disabled selected > اختار الماركة</option>
        <option value="option1" > صحتك ذهب</option>
        <option value="option2" > اوغارو</option>

      </select>
    </div>
  );
};

export default Selector;


