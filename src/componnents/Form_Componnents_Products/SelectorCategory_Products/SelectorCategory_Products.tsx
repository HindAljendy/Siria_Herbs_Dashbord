import React, { useEffect, useState } from 'react'
import { FormProduct } from '../../../types/types';
import axios from 'axios';



interface SelectorProps {
    name: string;
    formData: FormProduct;
    setFormData: (formData: FormProduct) => void;
}

interface DataCategory {
    id: number;
    name: string;
}


const SelectorCategory_Products: React.FC<SelectorProps> = ({ name, formData, setFormData }) => {

    const [categories, setCategories] = useState<DataCategory[]>([]);
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/categorys", {
            headers: {
                Accept: "application/json",
            },
        })
            .then((response) => {
                setCategories(response.data.data);
                console.log(response.data.data);
            })
            .catch((error) => {
                console.log("error", error);
            });
    }, []);

    const [color, setColor] = useState('gray');

    const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        setFormData({ ...formData, category_id: parseInt(e.target.value) });
        setColor("var(--blue-color)");
    };


    return (
        <div className='input HJ_width_select'>
            <label htmlFor="category" className='HJ_FontColor_blue'>{name}</label>
            <select name="category" id="category" value={formData.category_id} onChange={handleChange} style={{ color: color }} >
                <option value="" disabled selected > اختار الفئة</option>
                {categories?.map((category, index) => (
                    <option key={index} value={category.id}>{category.name}</option>
                ))}
            </select>
        </div>

    );
};


export default SelectorCategory_Products



