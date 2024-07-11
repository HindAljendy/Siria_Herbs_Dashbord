import React, { useEffect, useState } from "react";
import axios from "axios";
import SaveButton from "../Buttons/SaveButton";
import { useNavigate, useParams } from "react-router-dom";
import { FaRegTrashCan } from "react-icons/fa6";

type TCertificate = {
    icon: File | string | null;
    name: string;
    subname: string;
    photo: File | string | null;
    description: string;
}

export default function Certifica() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState<TCertificate>({
        icon: null,
        name: "",
        subname: "",
        photo: null,
        description: "",
    });
    const { itemId } = useParams<{ itemId: string }>();

    useEffect(() => {
        if (itemId) {
            axios.get(`http://127.0.0.1:8000/api/certification/${itemId}`)
                .then((response) => setFormData(response.data.data))
                .then(() => setFormData(prevState => ({
                    ...prevState,
                    icon: null,
                    photo: null,
                })))
                .then(() => console.table(formData));
        }
    }, [itemId]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('subname', formData.subname);
            formDataToSend.append('description', formData.description);
            if (formData.icon) {
                formDataToSend.append('icon', formData.icon);
            }
            if (formData.photo) {
                formDataToSend.append('photo', formData.photo);
            }

            if (itemId) {
                formDataToSend.append('_method', 'PUT')
                const response = await axios.post(
                    `http://127.0.0.1:8000/api/certification/${itemId}/update`,
                    formDataToSend, {
                    headers: {
                        // 'Authorization': 'Bearer <token>',
                        'Content-Type': 'multipart/form-data'
                    }
                }
                );
                console.log("Success:", response.data);
                // Handle success (e.g., show a message)
            } else {
                const response = await axios.post(
                    `http://127.0.0.1:8000/api/certification-create`,
                    formDataToSend, {
                    headers: {
                        // 'Authorization': 'Bearer <token>',
                        'Content-Type': 'multipart/form-data'
                    }
                }
                );
                console.log("Success:", response.data);
                // Handle success (e.g., show a message)
            }
        } catch (error) {
            console.error("Error sending data:", error);
            // Handle error (e.g., show an error message)
        }
        navigate('/settings/certificates')

    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const [iconName, setIconName] = useState<string>('لم يتم اختيار صورة');

    const handleIconChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setIconName(file.name);
            setFormData(prevState => ({
                ...prevState,
                icon: file
            }));
        } else {
            setIconName('لم يتم اختيار صورة');
        }
    };

    const triggerIconInput = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const fileInputElement = document.getElementById('iconInput') as HTMLInputElement | null;
        if (fileInputElement) {
            fileInputElement.click();
        }
    };

    const [photoName, setPhotoName] = useState<string>('لم يتم اختيار صورة');

    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setPhotoName(file.name);
            setFormData(prevState => ({
                ...prevState,
                photo: file
            }));
        } else {
            setPhotoName('لم يتم اختيار صورة');
        }
    };

    const triggerPhotoInput = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const fileInputElement = document.getElementById('photoInput') as HTMLInputElement | null;
        if (fileInputElement) {
            fileInputElement.click();
        }
    };



    return (
        <>
            <form className='form MA_form_padding HJ_Margin_Add' onSubmit={handleSubmit}>
                <div className='form-header HJ_FontColor_black MA_margin'>{itemId ? 'تعديل شهادة' : 'اضافة شهادة'}</div>

                <div className=" input">
                    <label htmlFor="name" className="HJ_FontColor_gray"> الأيقونة</label>
                    <div className="file-upload-wrapper">
                        <button className="choose-file-btn" onClick={triggerIconInput}>
                            <span>اختر ملف</span>
                        </button>
                        <div className="file-name">{iconName}</div>
                        <input
                            type="file"
                            id="iconInput"
                            onChange={handleIconChange} // Ensure handleFileChange is used here
                            style={{ display: "none" }}
                        />
                        <span className="icon">
                            <FaRegTrashCan />
                        </span>
                    </div>
                </div>

                <div className='input'>
                    <label htmlFor="title">اسم الشهادة</label>
                    <input type="text"
                        name="name"
                        id="title"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className='input'>
                    <label htmlFor="title"> الاسم الفرعي للشهادة</label>
                    <input type="text"
                        name="subname"
                        id="title"
                        value={formData.subname}
                        onChange={handleChange}
                    />
                </div>

                <div className=" input">
                    <label htmlFor="name" className="HJ_FontColor_gray">  صورة الشهادة</label>
                    <div className="file-upload-wrapper">
                        <button className="choose-file-btn" onClick={triggerPhotoInput}>
                            <span>اختر ملف</span>
                        </button>
                        <div className="file-name">{photoName}</div>
                        <input
                            type="file"
                            id="photoInput"
                            onChange={handlePhotoChange} // Ensure handleFileChange is used here
                            style={{ display: "none" }}
                        />
                        <span className="icon">
                            <FaRegTrashCan />
                        </span>
                    </div>
                </div>

                <div className='input'>
                    <label htmlFor="description" className="HJ_FontColor_gray"> وصف الشهادة</label>
                    <textarea name="description" id="description" className='MA_TextArea' value={formData.description} onChange={handleChange}></textarea>
                </div>
                
                <div className='HJ_container_Button'>
                    <SaveButton />
                </div>
            </form>
        </>

    );
}
