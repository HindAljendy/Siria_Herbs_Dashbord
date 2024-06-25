import React from 'react';
import './Delete_CategoryPopup.css';
import IMG_allert from './../../../assets/images/pop_up/Vector.svg';
import axios from 'axios';

type DeletePopupProps = {
    id?:  number; 
    onClose: () => void;
};

const Delete_CategoryPopup: React.FC<DeletePopupProps> = ({ id, onClose }) => {

    const handleDelete = async () => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/category/${id}`); 
            onClose(); 
            alert('تم تحديث الفئة بنجاح!');
           
        } catch (error) {
            console.error("Failed to delete item", error);
            alert('فشلت العملية، يرجى المحاولة مرة أخرى.');

        }
    };

    return (
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
    );
};

export default Delete_CategoryPopup;
