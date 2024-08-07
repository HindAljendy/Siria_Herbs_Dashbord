import React from 'react';
import './Delete_CategoryPopup.css';
import IMG_allert from './../../../assets/images/pop_up/Vector.svg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


type DeletePopupProps = {
    id?: number;
    onClose: () => void;
};


const Delete_CategoryPopup: React.FC<DeletePopupProps> = ({ id, onClose }) => {

    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const handleDelete = async () => {

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json",
            },
        };
        try {
            await axios.delete(`http://127.0.0.1:8000/api/category/${id}`, config);
            onClose();
            alert('تم حذف الفئة بنجاح!');
            navigate('/categories')
            window.location.reload();
        } catch (error: any) {
            if (error.response.status === 401) {
                navigate('/login');
            } else {
                console.error('Error', error);
            }

        }
    };

    return (
        <div className='HJ_Popup_Screen'>
            <div className='MA_Delete_Popup'>
                <div className="MA_box">
                    <div className='MA_Allert'>
                        <img src={IMG_allert} alt="IMG_allert" />
                        <div className='MA_content'>
                            <p className='MA_paragraph'>هل انت متاكد من حذف هذا العنصر</p>
                        </div>
                    </div>

                    <div className="MA_btns">
                        <button className='MA_btn MA_gray' onClick={onClose}>الغاء</button>
                        <button className='MA_btn MA_red' onClick={handleDelete}>تم</button>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Delete_CategoryPopup;
