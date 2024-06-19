
import React from 'react';
interface TextArea {
  name: string;
  label: string;
  className?: string;
  value?: string | null;
  onChange: (e: any) => void;
}

const TextArea: React.FC<TextArea> = ({ name, label, className, value, onChange }) => {
  return (
    <div className='input'>
    <label htmlFor="description"> {name}</label>
    <textarea name="description" id="description" ></textarea>
  </div>
  )
}
export default TextArea;