
import React from 'react';
import './TextArea.css'
interface TextArea {
  name: string;
}

const TextArea: React.FC<TextArea> = ({ name }) => {

  return (
    <div className='input'>
      <label htmlFor="description"  className="HJ_FontColor_gray"> {name}</label>
      <textarea name="description" id="description" className='MA_TextArea'></textarea>
    {/*  <div className='MA_Note'>سيظهر هذا النص فوق الصورة</div>*/}
    </div>
  )
}
export default TextArea;
