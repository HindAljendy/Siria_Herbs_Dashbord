
import React from 'react';
interface TextArea {
  name: string;
}

const TextArea: React.FC<TextArea> = ({ name }) => {
  return (
    <div className='input'>
    <label htmlFor="description"> {name}</label>
    <textarea name="description" id="description"></textarea>
  </div>
  )
}
export default TextArea;