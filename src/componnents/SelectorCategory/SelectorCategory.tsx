import React, { useState } from 'react'


interface SelectorProps {
    name: string;
}

const SelectorCategory: React.FC<SelectorProps> = ({ name  }) => {
    const [color, setColor] = useState('gray');
    const handleChange = () => {
        setColor("var(--blue-color)");
    }

    return (
        <div className='input HJ_width_select'>
            <label htmlFor="category" className='HJ_FontColor_blue'>{name}</label>
            <select name="category" id="category" onChange={handleChange} style={{ color: color }}>
                <option value="" disabled selected > اختار الفئة</option>
                <option value="option1" > فئة1 </option>
                <option value="option2" > فئة2</option>

            </select>
        </div>
    );
};


export default SelectorCategory




