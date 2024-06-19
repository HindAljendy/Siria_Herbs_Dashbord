import React from 'react';
import SaveButton from './Buttons/SaveButton'
import Checkbox from './Checkbox/Checkbox'
import Selector from './Selector/Selector'

export default function Form() {
  return (
    <form className='form form_padding'>
      <div className='d-flex d-flex_direction justify-between gap_22'>
        <div className='form-header HJ_FontColor_gray'>إضافة  إلى النظام</div>
        <div className='input'>
          <label htmlFor="name" className='HJ_label HJ_FontColor_blue'>الاسم</label>
          <input type="text" name="name" placeholder='اكتب اسم الفئة' />
        </div>
      </div>
      <div className='d-flex d-flex_direction justify-between gap_30'>
        <Selector name="الماركة"  />
        <Checkbox />
      </div>
      <div className='HJ_container_Button'>
        <SaveButton/>
      </div>
    </form>
  )
}
