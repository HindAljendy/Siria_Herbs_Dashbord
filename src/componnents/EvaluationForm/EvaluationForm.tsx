import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaRegTrashCan } from 'react-icons/fa6';
import { TEvaluationForm } from '../../types/types';

const EvaluationForm: React.FC<TEvaluationForm> = ({ mode, evaluation, setUpdate, handelHidenForm }) => {

  const [iconFile, setIconFile] = useState<File | null>(null);
  const [description, setDescription] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [fileName, setFileName] = useState<string>('لم يتم اختيار صورة');


  useEffect(() => {
    setDescription(evaluation.description);
    setTitle(evaluation.title);
  }, [evaluation]);

  // Function to handle title change
  const handleTilteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  // Function to handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Use optional chaining to avoid runtime errors
    console.log(e.target.files);
    if (file) {
      setFileName(file.name);
      setIconFile(file);
    } else {
      setFileName('لم يتم اختيار صورة');
    }
  };

  // Function to trigger the file input click
  const triggerFileInput = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Ensure the element exists before calling click
    const fileInputElement = document.getElementById(`evaluationFileInput ${evaluation.id}`) as HTMLInputElement | null;
    if (fileInputElement) {
      fileInputElement.click();
    }
  };

  // Handle description input changes
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  // Function to handle data deletion
  const handelDeleteData = () => {
    axios.delete(`http://127.0.0.1:8000/api/evaluation/${evaluation?.id}/delete`,
      {
        headers: {
          'Authorization': 'Bearer <token>',
        }
      }
    ).then(response => console.log(response.data))
      .then(() => setUpdate())
      .catch(error => console.error(error));
  }

  // Function to handle the remove button click
  const handelRemoveButton = () => {
    mode === 'create' ? handelHidenForm() : handelDeleteData()
  }

  // Function to handle the remove button click
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('description', description);
    formData.append('title', title);
    if (iconFile) {
      formData.append('icon', iconFile);
    }

    try {
      if (mode === 'create') {
        const response = await axios.post('http://127.0.0.1:8000/api/evaluation-create', formData, {
          headers: {
            'Authorization': 'Bearer <token>',
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log(response.data);
        handelHidenForm();
        setUpdate();
      } else {
        formData.append('_method', 'PUT');
        const response = await axios.post(`http://127.0.0.1:8000/api/evaluation/${evaluation?.id}/update`, formData, {
          headers: {
            'Authorization': 'Bearer  <token>',
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log(response.data);
        setUpdate();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="YS-left">
        <button className="YS-remove-form" onClick={handelRemoveButton} >
          <svg width="15" height="6" viewBox="0 0 15 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.2383 0.269531V5.78711H0.444336V0.269531H14.2383Z" fill="#283760" />
          </svg> <span> إزالة قسم</span>
        </button>
      </div>
      <form className='form YS-form' onSubmit={handleSubmit} >
        <label htmlFor="name">الأيقونة </label>
        <div className="file-upload-wrapper">
          <button className="choose-file-btn" onClick={triggerFileInput}>
            <span>اختر ملف</span>
          </button>
          <div className="file-name">{fileName}</div>
          <input
            type="file"
            id={`evaluationFileInput ${evaluation.id}`}
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          <span className="icon">
            <FaRegTrashCan />
          </span>
        </div>
        <div className='input'>
          <label htmlFor="title">العنوان</label>
          <input type="text" onChange={handleTilteChange} value={title} name="title" id="title" />
        </div>
        <div className='input'>
          <label htmlFor="description"> الوصف</label>
          <textarea
            name="description"
            id="description"
            value={description}
            onChange={handleChange}
          />
        </div>
        <div className="YS-left"><button className='YS-save-boutton' type='submit'>حفظ</button></div>
      </form >
    </>
  );
};

export default EvaluationForm;