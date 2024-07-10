import React from 'react'
import IMG_allert from './../../../assets/images//pop_up/Vector.svg'
import './Delete_Popup.css'



interface DeleteProps {
    onDeleteConfirm: () => void;
    onCancel: () => void;
}


const Delete_Popup: React.FC<DeleteProps> = ({ onCancel, onDeleteConfirm }) => {

    const handleFunctions = () => {
        onDeleteConfirm();
        onCancel();
    }


    return (
        <div className='HJ_Popup_Screen'>
            <div className='MA_Delete_Popup'>
                <div className="MA_box">
                    <div className='MA_Allert'>
                        <img src={IMG_allert} alt="IMG_allert" />
                        <div className='MA_content'>
                            <p className='MA_paragraph'> هل انت متاكد من حذف هذا العنصر</p>
                        </div>
                    </div>

                    <div className="MA_btns">
                        <button className='MA_btn MA_gray' onClick={() => onCancel()}>الغاء</button>
                        <button className='MA_btn MA_red' onClick={handleFunctions}>تم</button>
                    </div>
                </div>
            </div></div>

    )
}

export default Delete_Popup