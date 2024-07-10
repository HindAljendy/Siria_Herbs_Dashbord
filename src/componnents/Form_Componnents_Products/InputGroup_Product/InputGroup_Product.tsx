import React from 'react'
import { FormProduct } from '../../../types/types';



interface InputGroupProps {
    label1: string;
    label2: string;
    label3: string;
    formData: FormProduct;
    setFormData: (formData: FormProduct) => void;
}

const InputGroup_Product: React.FC<InputGroupProps> = ({ label1, label2, label3, formData, setFormData }) => {

    return (
        <div className='HJ_input input-group'>
            <div className='HJ_group'>
                <label htmlFor="name" className='HJ_FontColor_gray'>{label1}</label>
                <input
                    type="text"
                    name="code_number"
                    id="code_number"
                    className='HJ_width_input'
                    value={formData.code_number}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({
                        ...formData, code_number: e.target.value
                    })} />
            </div>
            <div className='HJ_group'>
                <label htmlFor="name1" className='HJ_FontColor_gray'>{label2}</label>
                <input
                    type="number"
                    name="weight"
                    id="weight"
                    className='HJ_width_input'
                    value={formData.weight}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({
                        ...formData,
                        weight: parseFloat(e.target.value)
                    })}
                />


            </div>
            <div className='HJ_group' >
                <label htmlFor="count_each_package" className='HJ_FontColor_gray HJ_width_label'>{label3}</label>
                <input
                    type="number"
                    name="count_each_package"
                    id="count_each_package"
                    className='HJ_width_input'
                    value={formData.count_each_package}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({
                        ...formData,
                        count_each_package: parseInt(e.target.value)
                    })}
                />


            </div>

        </div>
    )
}

export default InputGroup_Product




