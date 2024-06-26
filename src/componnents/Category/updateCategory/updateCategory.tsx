import React, { useEffect, useState } from 'react';
import './updateCategory.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateCategory = () => {
    const [name, setName] = useState('');
    const [published, setPublished] = useState(false);
    const [id, setId] = useState('');


    const { itemId } = useParams<{ itemId: string }>();

    useEffect(() => {
      
        if (itemId) {
            setId(itemId);
        } else {
            console.error('Invalid or missing ID');
        }
    }, [itemId]);

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        try {
            if (!id) throw new Error('ID is missing');

            const response = await axios.put(`http://127.0.0.1:8000/api/update/${id}`, {
                name,
                published,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response.data);
            alert('تم تحديث الفئة بنجاح!');
        } catch (error) {
            console.error(error);
            alert('فشلت العملية، يرجى المحاولة مرة أخرى.');
        }
    };

    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-header'>تحديث فئة في النظام</div>
                <div className='input'>
                    <label htmlFor="name">الاسم:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="published">هل هي مدرجة؟</label>
                    <select
                        id="published"
                        value={published? 'true' : 'false'}
                        onChange={(e) => setPublished(e.target.value === 'true')}
                        required
                    >
                        <option value="">اختر...</option>
                        <option value="true">نعم</option>
                        <option value="false">لا</option>
                    </select>
                </div>
                <button type="submit" className='submit_button'>حفظ </button>
            </form>
        </div>
    );
};

export default UpdateCategory;
