import React from 'react';
import SaveButton from './Buttons/SaveButton'
import Checkbox from './Checkbox/Checkbox'
import Selector from './Selector/Selector'
export default function Form() {
  return (
    <form className='form'>
      <div className='form-header'>إضافة  إلى النظام</div>
      <div className='input'>
        <label htmlFor="name">الاسم</label>
        <input type="text" name="name" id="" />
      </div>
      <Selector name="الفئة" options={['فئة1' , 'فئة2' , 'فئة3']}/>
      <Checkbox/>
      <SaveButton/>
    </form>
  )
}
