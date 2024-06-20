

import './TextArea.css'

import React, { ChangeEvent } from 'react';

interface TextAreaProps {
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ name, value, onChange }) => {
    return (
        <div>
            <label htmlFor={name}>{name}</label>
            <textarea id={name} name={name} value={value} onChange={onChange} />
        </div>
    );
};

export default TextArea;