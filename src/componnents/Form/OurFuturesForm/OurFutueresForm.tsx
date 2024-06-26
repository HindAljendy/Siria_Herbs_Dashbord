import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import './OurFutureForm.css'
import SaveButton from './../Buttons/SaveButton';
import axios from 'axios';
import { FaRegTrashCan } from 'react-icons/fa6';

type TOurFuture = {
  title: string;
  description: string;
  main_image: File | string | null;
  image1: File | string | null;
  image2: File | string | null;
  image3: File | string | null;
  image4: File | string | null;
  image5: File | string | null;
}

export default function OurFutueresForm() {
  const [formData, setFormData] = useState<TOurFuture>({
    title: "",
    description: "",
    main_image: null,
    image1: null,
    image2: null,
    image3: null,
    image4: null,
    image5: null,
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


  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      if (formData.main_image) {
        formDataToSend.append('main_image', formData.main_image);
      }
      if (formData.image1) {
        formDataToSend.append('image1', formData.image1);
      }
      if (formData.image2) {
        formDataToSend.append('image2', formData.image2);
      }
      if (formData.image3) {
        formDataToSend.append('image3', formData.image3);
      }
      if (formData.image4) {
        formDataToSend.append('image4', formData.image4);
      }
      if (formData.image5) {
        formDataToSend.append('image5', formData.image5);
      }
      formDataToSend.append('_method', 'PUT');
      console.log(formDataToSend);
      const response = await axios.post(
        "http://127.0.0.1:8000/api/advantage/1/update",
        formDataToSend,
      );

      console.log("Success:", response.data);
      // Handle success (e.g., show a message)
    } catch (error) {
      console.error("Error sending data:", error);
      // Handle error (e.g., show an error message)
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

    const fileInputElement = document.getElementById('mainImageFileInput') as HTMLInputElement | null;
    if (fileInputElement) {
      fileInputElement.click();
    }
  };

  const [image1Name, setImage1Name] = useState<string>('لم يتم اختيار صورة');

  const handleImage1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage1Name(file.name);
      setFormData(prevState => ({
        ...prevState,
        image1: file
      }));
    } else {
      setImage1Name('لم يتم اختيار صورة');
    }
  };

  const triggerImage1Input = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const fileInputElement = document.getElementById('Image1FileInput') as HTMLInputElement | null;
    if (fileInputElement) {
      fileInputElement.click();
    }
  };

  const [image2Name, setImage2Name] = useState<string>('لم يتم اختيار صورة');

  const handleImage2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage2Name(file.name);
      setFormData(prevState => ({
        ...prevState,
        image2: file
      }));
    } else {
      setImage2Name('لم يتم اختيار صورة');
    }
  };

  const triggerImage2Input = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const fileInputElement = document.getElementById('Image2FileInput') as HTMLInputElement | null;
    if (fileInputElement) {
      fileInputElement.click();
    }
  };
  
  const [image3Name, setImage3Name] = useState<string>('لم يتم اختيار صورة');

  const handleImage3Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage3Name(file.name);
      setFormData(prevState => ({
        ...prevState,
        image3: file
      }));
    } else {
      setImage3Name('لم يتم اختيار صورة');
    }
  };

  const triggerImage3Input = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const fileInputElement = document.getElementById('Image3FileInput') as HTMLInputElement | null;
    if (fileInputElement) {
      fileInputElement.click();
    }
  };
  
  const [image4Name, setImage4Name] = useState<string>('لم يتم اختيار صورة');

  const handleImage4Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage4Name(file.name);
      setFormData(prevState => ({
        ...prevState,
        image4: file
      }));
    } else {
      setImage4Name('لم يتم اختيار صورة');
    }
  };

  const triggerImage4Input = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const fileInputElement = document.getElementById('Image4FileInput') as HTMLInputElement | null;
    if (fileInputElement) {
      fileInputElement.click();
    }
  };

  const [image5Name, setImage5Name] = useState<string>('لم يتم اختيار صورة');

  const handleImage5Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage5Name(file.name);
      setFormData(prevState => ({
        ...prevState,
        image5: file
      }));
    } else {
      setImage5Name('لم يتم اختيار صورة');
    }
  };

  const triggerImage5Input = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const fileInputElement = document.getElementById('Image5FileInput') as HTMLInputElement | null;
    if (fileInputElement) {
      fileInputElement.click();
    }
  };

  return (
    <form className='form  MA_form_padding MA_MarginBottom' onSubmit={handleSubmit}>
      <div className='MA-form-header  HJ_FontColor_black  MA_margin_71'>مميزانا</div>
      <div className='input'>
        <label htmlFor="address">العنوان</label>
        <input type="text" name="title" id="address" value={formData.title} onChange={handleChange} />
      </div>

      <div className='input'>
        <label htmlFor="description" className="HJ_FontColor_gray"> الوصف</label>
        <textarea name="description" id="description" className='MA_TextArea' value={formData.description} onChange={handleChange}></textarea>
      </div>

      <div className=" input">
        <label htmlFor="name" className="HJ_FontColor_gray"> الصورة الرئيسية</label>
        <div className="file-upload-wrapper">
          <button className="choose-file-btn" onClick={triggerMainImageInput}>
            <span>اختر ملف</span>
          </button>
          <div className="file-name">{mainImageName}</div>
          <input
            type="file"
            id="mainImageFileInput"
            onChange={handleMainImageChange} // Ensure handleFileChange is used here
            style={{ display: "none" }}
          />
          <span className="icon">
            <FaRegTrashCan />
          </span>
        </div>
      </div>

      <div className=" input">
        <label htmlFor="name" className="HJ_FontColor_gray"> الصورة الأولى</label>
        <div className="file-upload-wrapper">
          <button className="choose-file-btn" onClick={triggerImage1Input}>
            <span>اختر ملف</span>
          </button>
          <div className="file-name">{image1Name}</div>
          <input
            type="file"
            id="Image1FileInput"
            onChange={handleImage1Change} // Ensure handleFileChange is used here
            style={{ display: "none" }}
          />
          <span className="icon">
            <FaRegTrashCan />
          </span>
        </div>
      </div>

      <div className=" input">
        <label htmlFor="name" className="HJ_FontColor_gray"> الصورة الثانية</label>
        <div className="file-upload-wrapper">
          <button className="choose-file-btn" onClick={triggerImage2Input}>
            <span>اختر ملف</span>
          </button>
          <div className="file-name">{image2Name}</div>
          <input
            type="file"
            id="Image2FileInput"
            onChange={handleImage2Change} // Ensure handleFileChange is used here
            style={{ display: "none" }}
          />
          <span className="icon">
            <FaRegTrashCan />
          </span>
        </div>
      </div>

      <div className=" input">
        <label htmlFor="name" className="HJ_FontColor_gray"> الصورة الثالثة</label>
        <div className="file-upload-wrapper">
          <button className="choose-file-btn" onClick={triggerImage3Input}>
            <span>اختر ملف</span>
          </button>
          <div className="file-name">{image3Name}</div>
          <input
            type="file"
            id="Image3FileInput"
            onChange={handleImage3Change} // Ensure handleFileChange is used here
            style={{ display: "none" }}
          />
          <span className="icon">
            <FaRegTrashCan />
          </span>
        </div>
      </div>

      <div className=" input">
        <label htmlFor="name" className="HJ_FontColor_gray"> الصورة الرابعة</label>
        <div className="file-upload-wrapper">
          <button className="choose-file-btn" onClick={triggerImage4Input}>
            <span>اختر ملف</span>
          </button>
          <div className="file-name">{image4Name}</div>
          <input
            type="file"
            id="Image4FileInput"
            onChange={handleImage4Change} // Ensure handleFileChange is used here
            style={{ display: "none" }}
          />
          <span className="icon">
            <FaRegTrashCan />
          </span>
        </div>
      </div>

      <div className=" input">
        <label htmlFor="name" className="HJ_FontColor_gray"> الصورة الخامسة</label>
        <div className="file-upload-wrapper">
          <button className="choose-file-btn" onClick={triggerImage5Input}>
            <span>اختر ملف</span>
          </button>
          <div className="file-name">{image5Name}</div>
          <input
            type="file"
            id="Image5FileInput"
            onChange={handleImage5Change} // Ensure handleFileChange is used here
            style={{ display: "none" }}
          />
          <span className="icon">
            <FaRegTrashCan />
          </span>
        </div>
      </div>

      <div className='MA_container_Button'>
        <SaveButton />
      </div>
    </form>
  )
}
