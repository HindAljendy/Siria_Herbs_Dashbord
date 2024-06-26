import React, { useEffect, useState } from "react";
import axios from "axios";
import TextArea from "../TextArea/TextArea";
import SaveButton from "../Buttons/SaveButton";
import ImageUpload from './../ImageUpload/ImageUpload ';

export default function Certifica() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        file: null,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/about/1");
                console.log('hhhhhffhello' +response.data.data);
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
          if (formData.file) {
            formDataToSend.append('file', formData.file);
          }
          console.log(formData);
          const response = await axios.put(
            "http://127.0.0.1:8000/api/about/1",
            formData
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
            <div className='form-header'>إضافة شهادة</div>
            <ImageUpload name="الإبقونة" onChange={handleChangeFile}/>
            <div className='input'>
                <label htmlFor="title">اسم الشهادة</label>
                <input type="text" 
                 name="title" 
                 id="title" 
                 value={formData.title}
                 onChange={handleChange} 
                 />
            </div>
            <div className='input'>
                <label htmlFor="title"> الاسم الفرعي للشهادة</label>
                <input type="text" 
                 name="title" 
                 id="title" 
                 value={formData.title}
                 onChange={handleChange} 
                 />
            </div>
            <ImageUpload name="صورة الشهادة" onChange={handleChangeFile}/>
            <TextArea name="وصف الشهادة" value={formData.description} onChange={handleChange}/>
            <SaveButton />
        </form>
    );
}
