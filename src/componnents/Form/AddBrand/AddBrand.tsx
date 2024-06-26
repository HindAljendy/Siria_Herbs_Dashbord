import React, { useState } from 'react';
import './AddBrand.css';
import axios from 'axios';

const AddBrand: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    main_image: null as File | null,
    presentation_image: null as File | null,
    background_image: null as File | null,
    description: '',
    published: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({
        ...formData,
        [name]: checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData({
        ...formData,
        [name]: files[0]
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData();
    form.append('name', formData.name);
    if (formData.main_image) form.append('main_image', formData.main_image);
    if (formData.presentation_image) form.append('presentation_image', formData.presentation_image);
    if (formData.background_image) form.append('background_image', formData.background_image);
    form.append('description', formData.description);
    form.append('published', formData.published.toString());

    axios.post('http://127.0.0.1:8000/api/create-brand', form)
      .then(response => {
        console.log('Brand created successfully:', response.data);
      })
      .catch(error => {
        console.error('There was an error creating the brand!', error);
      });
  };

  return (
    <form className='IB_form' onSubmit={handleSubmit}>
      <h1>إضافة ماركة إلى النظام</h1>
      <div className='IB_input'>
        <label htmlFor="name">الاسم</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>

      <div className='IB_input'>
        <label htmlFor="main_image">الصورة </label>
        <input type="file" name="main_image" onChange={handleFileChange} />
      </div>
      
      <div className='IB_input'>
        <label htmlFor="description">الوصف</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange as (e: React.ChangeEvent<HTMLTextAreaElement>) => void} 
        />
      </div>

     
      <div className='IB_input'>
        <label htmlFor="presentation_image">صورة رئيسية</label>
        <input type="file" name="presentation_image" onChange={handleFileChange} />
      </div>
      <div className='IB_input'>
        <label htmlFor="background_image">صورة صفحة العرض</label>
        <input type="file" name="background_image" onChange={handleFileChange} />
      </div>
     
      <div className='IB_publish'>
        <input type="checkbox" name="published" checked={formData.published} onChange={handleChange} />
        <label htmlFor="published">نشر</label>
      </div>
      <div className="IB_button-container">
        <button type="submit">حفظ</button>
      </div>
    </form>
  );
};

export default AddBrand;

