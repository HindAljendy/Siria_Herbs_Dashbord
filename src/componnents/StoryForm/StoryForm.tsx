import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaRegTrashCan } from 'react-icons/fa6';
import { TStoryForm } from '../../types/types';

const StoryForm: React.FC<TStoryForm> = ({ mode, story, setUpdate, handelHidenForm }) => {

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [description, setDescription] = useState<string>('');
  const [fileName, setFileName] = useState<string>('لم يتم اختيار صورة');


  useEffect(() => {
    setDescription(story.description);
  }, [story.description]);

  // Handle file input changes
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Use optional chaining to avoid runtime errors
    if (file) {
      setFileName(file.name);
      setImageFile(file);
    } else {
      setFileName('لم يتم اختيار صورة');
    }
  };

  // Trigger the file input click event
  const triggerFileInput = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Ensure the element exists before calling click
    const fileInputElement = document.getElementById(`StoryFileInput ${story.id}`) as HTMLInputElement | null;
    if (fileInputElement) {
      fileInputElement.click();
    }
  };
  // Handle description input changes
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  // Handle the deletion of a story
  const handelDeleteData = () => {
    axios.delete(`http://127.0.0.1:8000/api/story/${story?.id}/delete`,
      {
        headers: {
          'Authorization': 'Bearer <token>',
        }
      }
    ).then(response => console.log(response.data))
      .then(() => setUpdate())
      .catch(error => console.error(error));
  }

  // Handle the deletion of a story
  const handelRemoveButton = () => {
    mode === 'create' ? handelHidenForm() : handelDeleteData()
  }

  // Handle the form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('description', description);
    if (imageFile) {
      formData.append('file', imageFile);
    }

    try {
      if (mode === 'create') {
        const response = await axios.post('http://127.0.0.1:8000/api/story-create', formData, {
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
        const response = await axios.post(`http://127.0.0.1:8000/api/story/${story?.id}/update`, formData, {
          headers: {
            'Authorization': 'Bearer <token>',
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
      <form className='form YS-form' onSubmit={handleSubmit}>
        <div className="container input">
          <label htmlFor="name">صورة/فديو</label>
          <div className="file-upload-wrapper">
            <button className="choose-file-btn" onClick={triggerFileInput}>
              <span>اختر ملف</span>
            </button>
            <div className="file-name">{fileName}</div>
            <input
              type="file"
              id={`StoryFileInput ${story.id}`}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <span className="icon">
              <FaRegTrashCan />
            </span>
          </div>
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
        <div className="YS-left HJ_MarginTop"><button className='YS-save-boutton' type='submit'>حفظ</button></div>
      </form >
    </>
  )
}

export default StoryForm;
