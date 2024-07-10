import React, { useEffect, useState } from 'react';
import './AddBrand.css';
import axios from 'axios';
import { FaRegTrashCan } from 'react-icons/fa6';
import SaveButton from '../Buttons/SaveButton';
import BigNavigationLinks_Brands from '../../BigNavigationLinks/BigNavigationLinks_Brands';


import { useNavigate, useParams } from 'react-router-dom';



const AddBrand: React.FC = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    main_image: null as File | null,
    presentation_image: null as File | null,
    background_image: null as File | null,
    description: '',
    color: '',
    published: false as boolean
  });

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      // setBrandId(id);
      axios.get(`http://127.0.0.1:8000/api/brands/${id}`)
        .then((response) => setFormData(
          prevState => ({
            ...prevState,
            name: response.data.data.name,
            description: response.data.data.description,
            color: response.data.data.color,
            background_image: null,
            presentation_image: null,
            main_image: null,
            published: response.data.data.published === 1 ? true : false
          })));
}
  }, []);

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

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = new FormData();
  form.append('name', formData.name);
  if (formData.main_image) form.append('main_image', formData.main_image);
  if (formData.presentation_image) form.append('presentation_image', formData.presentation_image);
  if (formData.background_image) form.append('background_image', formData.background_image);
  form.append('description', formData.description);
  form.append('color', formData.color);
  form.append('published', formData.published.toString());
  console.log(form);

  if (id) {
    form.append('_method', 'PUT');
    axios.post(`http://127.0.0.1:8000/api/brands/${id}/update`, form)
      .then(response => {
        console.log('Brand created successfully:', response.data);
      })
      .catch(error => {
        console.error('There was an error creating the brand!', error);
      });

  } else {

    axios.post('http://127.0.0.1:8000/api/create-brand', form)
      .then(response => {
        console.log('Brand created successfully:', response.data);
      })
      .catch(error => {
        console.error('There was an error creating the brand!', error);
      });


  }
  navigate('/brands');
};

const [backgroundImageName, setBackgroundImageName] = useState<string>('لم يتم اختيار صورة');

const handleBackgroundImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file) {
    setBackgroundImageName(file.name);
    setFormData(prevState => ({
      ...prevState,
      background_image: file
    }));
  } else {
    setBackgroundImageName('لم يتم اختيار صورة');
  }
};

const triggerBackgroundImageInput = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();

  const fileInputElement = document.getElementById('backgroundImageInput') as HTMLInputElement | null;
  if (fileInputElement) {
    fileInputElement.click();
  }
};

const [mainImageName, setMainImageName] = useState<string>('لم يتم اختيار صورة');

const handleMainImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file) {
    setMainImageName(file.name);
    setFormData(prevState => ({
      ...prevState,
      main_image: file
    }));
  } else {
    setMainImageName('لم يتم اختيار صورة');
  }
};

const triggerMainImageInput = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();

  const fileInputElement = document.getElementById('mainImageInput') as HTMLInputElement | null;
  if (fileInputElement) {
    fileInputElement.click();
  }
};

const [presentationImageName, setPresentationImageName] = useState<string>('لم يتم اختيار صورة');

const handlePresentationImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file) {
    setPresentationImageName(file.name);
    setFormData(prevState => ({
      ...prevState,
      presentation_image: file
    }));
  } else {
    setPresentationImageName('لم يتم اختيار صورة');
  }
};

const triggerPresentationImageInput = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();

  const fileInputElement = document.getElementById('presentationImageInput') as HTMLInputElement | null;
  if (fileInputElement) {
    fileInputElement.click();
  }
};

return (
  <form className='form' onSubmit={handleSubmit}>
    <div className='form-header'>إضافة ماركة الى النظام</div>

    <div className='input'>
      <label htmlFor="name">الاسم </label>
      <input type="text"
        name="name"
        id="name"
        value={formData.name}
        onChange={handleChange}
      />
    </div>

    <div className=" input">
      <label htmlFor="name" className="HJ_FontColor_gray"> صورة الخلفية</label>
      <div className="file-upload-wrapper">
        <button className="choose-file-btn" onClick={triggerBackgroundImageInput}>
          <span>اختر ملف</span>
        </button>
        <div className="file-name">{backgroundImageName}</div>
        <input
          type="file"
          id="backgroundImageInput"
          onChange={handleBackgroundImageChange} // Ensure handleFileChange is used here
          style={{ display: "none" }}
        />
        <span className="icon">
          <FaRegTrashCan />
        </span>
      </div>
    </div>

    <div className='input'>
      <label htmlFor="description" className="HJ_FontColor_gray">الوصف </label>
      <textarea name="description" id="description" className='MA_TextArea' value={formData.description} onChange={handleChange}></textarea>
    </div>

    <div className=" input">
      <label htmlFor="name" className="HJ_FontColor_gray"> صورة رئيسية</label>
      <div className="file-upload-wrapper">
        <button className="choose-file-btn" onClick={triggerMainImageInput}>
          <span>اختر ملف</span>
        </button>
        <div className="file-name">{mainImageName}</div>
        <input
          type="file"
          id="mainImageInput"
          onChange={handleMainImageChange} // Ensure handleFileChange is used here
          style={{ display: "none" }}
        />
        <span className="icon">
          <FaRegTrashCan />
        </span>
      </div>
    </div>

    <div className=" input">
      <label htmlFor="name" className="HJ_FontColor_gray"> صورة صفحة العرض</label>
      <div className="file-upload-wrapper">
        <button className="choose-file-btn" onClick={triggerPresentationImageInput}>
          <span>اختر ملف</span>
        </button>
        <div className="file-name">{presentationImageName}</div>
        <input
          type="file"
          id="presentationImageInput"
          onChange={handlePresentationImageChange} // Ensure handleFileChange is used here
          style={{ display: "none" }}
        />
        <span className="icon">
          <FaRegTrashCan />
        </span>
      </div>
    </div>


    <div className='input'>
      <label htmlFor="color">اللون </label>
      <input type='color'
        name="color"
        id="color"
        value={formData.color}
        onChange={handleChange}
      />
    </div>

    <div className="input">
      <div className='checkbox'>
        <input type="checkbox" name="published" id="published" checked={formData.published} onChange={handleChange} />
        <label htmlFor="published" className='HJ_label'> نشر</label>
      </div>
    </div>


    <div className="MA_container_Button">
      <button type="submit">حفظ</button>
    </div>
  </form>
);

};

export default AddBrand;

