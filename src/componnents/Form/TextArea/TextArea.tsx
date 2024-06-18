import React from 'react';

interface TextAreaProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ name, value, onChange }) => {
  return (
    <div className='input'>
      <label htmlFor="description"> {name}</label>
      <textarea name="description" id="description" value={value} onChange={onChange}></textarea>
    </div>
  )
}

export default TextArea;
