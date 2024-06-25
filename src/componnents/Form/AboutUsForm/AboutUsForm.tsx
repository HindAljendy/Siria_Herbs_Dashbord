import React from "react"
import './AboutUsForm.css'
import TextArea from "../TextArea/TextArea"
import ImageUpload from "../ImageUpload/ImageUpload "
import SaveButton from "../Buttons/SaveButton"

export default function AboutUsForm() {
    return (
        <form className='form MA_form_padding'>
            <div className='form-header  HJ_FontColor_black MA_margin41'>عنا</div>
            <div className='input'>
                <label htmlFor="name">العنوان</label>
                <input type="text" name="name" />
            </div>
            <TextArea name="الوصف" />
            <ImageUpload name="صورة او فيديو" />
            <div className='MA_container_Button'>
                <SaveButton />
            </div>
        </form>
    )
}
