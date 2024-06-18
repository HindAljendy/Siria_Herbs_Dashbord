
import React from 'react';
interface TextArea {
  name: string;
  description: string;
  onChange: (value: string) => void;
}

const TextArea: React.FC<TextArea> = ({ name, description, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };
  return (
    <div className='input'>
      <label htmlFor="description"> {name}</label>
      <textarea
        name="description"
        id="description"
        value={description}
        onChange={handleChange}
      />
    </div>
  )
}
export default TextArea;