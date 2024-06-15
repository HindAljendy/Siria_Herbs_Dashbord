import React from 'react'
import TextArea from '../TextArea/TextArea'
import ImageUpload from '../ImageUpload/ImageUpload '
import SaveButton from './../Buttons/SaveButton';

export default function OurFutueresForm() {
  return (
    <form className='form'>
      <div className='form-header'>مميزانا</div>
      <div className='input'>
        <label htmlFor="address">العنوان</label>
        <input type="text" name="address" id="address" />
      </div>
      <TextArea name='الوصف' />
      <ImageUpload name='الصورة الرئيسية'/>
      <ImageUpload name='الصورة الأولى'/>
      <ImageUpload name='الصورة الثانية'/>
      <ImageUpload name='الصورة الثالثة'/>
      <ImageUpload name='الصورة الرابعة'/>
      <ImageUpload name='الصورة الخامسة'/>
      <SaveButton/>

    </form>
  )
}
