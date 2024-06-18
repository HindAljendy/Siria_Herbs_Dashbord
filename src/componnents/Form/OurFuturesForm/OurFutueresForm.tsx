import React, { useEffect, useState } from 'react'
import TextArea from '../TextArea/TextArea'
import ImageUpload from '../ImageUpload/ImageUpload '
import SaveButton from './../Buttons/SaveButton';
import axios from 'axios';

export default function OurFutueresForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    main_image: null,
    images:[],
});
useEffect(() => {
  const fetchData = async () => {
      try {
          const response = await axios.get("http://127.0.0.1:8000/api/advantage/1");
          setFormData(response.data.data);
      } catch (error) {
          console.error("Failed to fetch data:", error);
      }
  };
  fetchData();
}, []);


const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prevState => ({
     ...prevState,
      [name]: value
  }));
};

const handleChangeFile = (e) => {
  setFormData(prevState => ({
      ...prevState,
      file: e.target.files[0]
  }));
};

const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('description', formData.description);
    if (formData.main_image) {
      formDataToSend.append('main_image', formData.main_image);
    }
    console.log(formData);
    const response = await axios.put(
      "http://127.0.0.1:8000/api/advantage/1",
      formData,
    );

    console.log("Success:", response.data);
    // Handle success (e.g., show a message)
  } catch (error) {
    console.error("Error sending data:", error);
    // Handle error (e.g., show an error message)
  }
};
  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='form-header'>مميزانا</div>
      <div className='input'>
        <label htmlFor="address">العنوان</label>
        <input type="text" name="title" id="address" value={formData.title} onChange={handleChange}/>
      </div>
      <TextArea name='الوصف' value={formData.description} onChange={handleChange}/>
      <ImageUpload name='الصورة الرئيسية' />
      <ImageUpload name='الصورة الأولى'/>
      <ImageUpload name='الصورة الثانية'/>
      <ImageUpload name='الصورة الثالثة'/>
      <ImageUpload name='الصورة الرابعة'/>
      <ImageUpload name='الصورة الخامسة'/>
      <SaveButton/>

    </form>
  )
}
