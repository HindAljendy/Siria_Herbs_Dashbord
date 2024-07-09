import React from 'react'
import './Delete_Popup.css'
import IMG_allert from './../../assets/images/pop_up/Vector.svg'

type TPopup = {
    isPopupVisible: boolean;
    setIsPopupVisible(value: boolean): void;
    setDeleteBrand(value: boolean): void;
}
const Delete_Popup: React.FC<TPopup> = ({ isPopupVisible, setIsPopupVisible, setDeleteBrand }) => {
    const handelExiteButton = () => {
        setIsPopupVisible(!isPopupVisible);
    }
    const handelDoneButton = () => {
        setDeleteBrand(true);
    }

    return (
        <div className='MA_Delete_Popup'>
            <div className="MA_box">
                <div className='MA_Allert'>
                    <img src={IMG_allert} alt="IMG_allert" />
                    <div className='MA_content'>
                        <p className='MA_paragraph'> هل انت متاكد من حذف هذا العنصر</p>
                    </div>
                </div>

                <div className="MA_btns">
                    <button className='MA_btn MA_gray' onClick={handelExiteButton}>الغاء</button>
                    <button className='MA_btn MA_red' onClick={handelDoneButton}>تم</button>
                </div>
            </div>
        </div>
    )
}

export default Delete_Popup