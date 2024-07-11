import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { FaRegTrashCan } from "react-icons/fa6";
import './AboutUsForm.css'

type TAboutUs = {
    title: string;
    description: string;
    file: File | null
}

export default function AboutUsForm() {

    const token = localStorage.getItem("token");

    const [formData, setFormData] = useState<TAboutUs>({
        title: "",
        description: "",
        file: null,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/about/1");
                console.log('hhhhhffhello' + response.data.data);
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
            if (formData.file) {
                formDataToSend.append('file', formData.file);
            }
            formDataToSend.append('_method', 'PUT');
            console.log(formDataToSend);
            const response = await axios.post(
                "http://127.0.0.1:8000/api/about/1/update",
                formDataToSend,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Accept': "application/json",
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            console.log("Success:", response.data);
            // Handle success (e.g., show a message)
        } catch (error) {
            console.error("Error sending data:", error);
            // Handle error (e.g., show an error message)
        }
    };

    const [fileName, setFileName] = useState<string>('لم يتم اختيار صورة');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileInput = e.target.files?.[0];
        if (fileInput) {
            setFileName(fileInput.name);
            setFormData(prevState => ({
                ...prevState,
                file: fileInput
            }));
        } else {
            setFileName('لم يتم اختيار صورة');
        }
    };

    const triggerFileInput = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const fileInputElement = document.getElementById('fileInput') as HTMLInputElement | null;
        if (fileInputElement) {
            fileInputElement.click();
        }
    };

    return (
        <form className='form MA_form_padding' onSubmit={handleSubmit}>
            <div className='form-header HJ_FontColor_black MA_margin'>عنا</div>
            <div className='input'>
                <label htmlFor="title">العنوان</label>
                <input type="text"
                    name="title"
                    id="title"
                    value={formData.title}
                    onChange={handleChange}
                />
            </div>
            <div className='input'>
                <label htmlFor="description"> الوصف</label>
                <textarea name="description" id="description" className='MA_TextArea' value={formData.description} onChange={handleChange}></textarea>
            </div>

            <div className=" input">
                <label htmlFor="name" className="HJ_FontColor_gray"> صورة او فديو</label>
                <div className="file-upload-wrapper">
                    <button className="choose-file-btn" onClick={triggerFileInput}>
                        <span>اختر ملف</span>
                    </button>
                    <div className="file-name">{fileName}</div>
                    <input
                        type="file"
                        id="fileInput"
                        onChange={handleFileChange} // Ensure handleFileChange is used here
                        style={{ display: "none" }}
                    />
                    <span className="icon">
                        <FaRegTrashCan />
                    </span>
                </div>
            </div>

            <div className="YS-left HJ_MarginTop"><button className='YS-save-boutton' type='submit'>حفظ</button></div>

        </form>
    );
}
