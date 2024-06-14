import React from "react"
import TextArea from "../TextArea/TextArea"
import ImageUpload from "../ImageUpload/ImageUpload "
import SaveButton from "../Buttons/SaveButton"
export default function AboutUsForm() {
    return (
            <form className='form'>
                <div className='form-header'>عنا</div>
                <div className='input'>
                    <label htmlFor="name">العنوان</label>
                    <input type="text" name="name" id="" />
                </div>
                <TextArea name="الوصف"/>
                <ImageUpload name="صورة او فيديو"/>
                <SaveButton/>
            </form>
    )
}
