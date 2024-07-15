import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import './PageHeaderForm.css'
import { FaRegTrashCan } from 'react-icons/fa6';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface Props {
    heroId: number;
}

const PageHeaderForm: FC<Props> = ({ heroId }) => {

    const [title, setTitle] = useState<string>('');
    const [image, setImage] = useState<File | null>(null);
    const [fileName, setFileName] = useState<string>('لم يتم اختيار صورة');

    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/hero/${heroId}`)
            .then((response) => {
                setTitle(response.data.data.title);
                console.log(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [heroId])

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setTitle(value);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name);
            setImage(file)
        } else {
            setFileName('لم يتم اختيار صورة');
        }
    };

    const triggerFileInput = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const fileInputElement = document.getElementById('imageFileInput') as HTMLInputElement | null;
        if (fileInputElement) {
            fileInputElement.click();
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        if (image instanceof File) {
            formData.append("image", image);
        }
        formData.append('_method', 'PUT');

        try {
            const response = await axios.post(`http://127.0.0.1:8000/api/hero/${heroId}/update`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Accept': "application/json",
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log("Response:", response.data);
        } catch (error: any) {
            if (error.response.status === 401) {
                navigate('/login');
            } else {
                console.error(' Error!', error);
            }
        }
    };

    return (
        <>

            <form className="form MA_form_padding" onSubmit={handleSubmit}>
                <div className="form-header HJ_FontColor_black MA_margin">رأس الصفحة</div>
                <div className=" input">
                    <label htmlFor="name" className="HJ_FontColor_gray"> صورة رأس الصفحة</label>
                    <div className="file-upload-wrapper">
                        <button className="choose-file-btn" onClick={triggerFileInput}>
                            <span>اختر ملف</span>
                        </button>
                        <div className="file-name">{fileName}</div>
                        <input
                            type="file"
                            id="imageFileInput"
                            onChange={handleFileChange} // Ensure handleFileChange is used here
                            style={{ display: "none" }}
                        />
                        <span className="icon">
                            <FaRegTrashCan />
                        </span>
                    </div>
                </div>
                <div className='input'>
                    <label htmlFor="title" className="HJ_FontColor_gray"> العنوان</label>
                    <textarea name="title" id="title" className='MA_TextArea' value={title} onChange={handleChange} ></textarea>
                </div>

                <div className="YS-left HJ_MarginTop"><button className='YS-save-boutton' type='submit'>حفظ</button></div>

            </form>
        </>
    );
};
export default PageHeaderForm;
