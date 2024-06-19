import React from 'react'
import './OurFutureForm.css'
import TextArea from '../TextArea/TextArea'
import ImageUpload from '../ImageUpload/ImageUpload '
import SaveButton from './../Buttons/SaveButton';

export default function OurFutueresForm() {
  return (
    <form className='form MA_form_padding MA_MarginBottom'>
      <div className='form-header  HJ_FontColor_black  MA_margin_71'>مميزانا</div>
      <div className='input'>
        <label htmlFor="address">العنوان</label>
        <input type="text" name="address" id="address" />
      </div>
      <TextArea name='الوصف' />
      <ImageUpload name='الصورة الرئيسية' />
      <ImageUpload name='الصورة الأولى' />
      <ImageUpload name='الصورة الثانية' />
      <ImageUpload name='الصورة الثالثة' />
      <ImageUpload name='الصورة الرابعة' />
      <ImageUpload name='الصورة الخامسة' />
      <div className='MA_container_Button'>
        <SaveButton />
      </div>

    </form>
  )
}
