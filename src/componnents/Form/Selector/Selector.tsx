import React from 'react';

interface SelectorProps {
  name: string;
  options: string[];
}

const Selector: React.FC<SelectorProps> = ({ name, options }) => {
  return (
    <div className='input'>
      <label htmlFor="brand"> {name}</label>
      <select name="brad" id="brad">
        {options && options.map((option, index) => {
          return (
            <option key={index} value="volvo">{option}</option>
          );
        })}
      </select>
    </div>
  );
};

export default Selector;