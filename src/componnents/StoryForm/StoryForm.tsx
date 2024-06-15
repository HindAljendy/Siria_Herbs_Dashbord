import React from 'react'
import './StoryForm.css'
import ImageUpload from '../Form/ImageUpload/ImageUpload '
import TextArea from '../Form/TextArea/TextArea'
// import { FaTrash } from 'react-icons/fa'

export const StoryForm = () => {
  return (
    <form className='form YS-story' >
      <a href='' className="YS-remove-form" >
        <svg width="15" height="6" viewBox="0 0 15 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.2383 0.269531V5.78711H0.444336V0.269531H14.2383Z" fill="#283760" />
        </svg> <span> إزالة قسم</span>
      </a>
      <ImageUpload labelName='صورة/فديو' />
      <TextArea name='الوصف' />
      <button className='YS-save-boutton' type='submit'>حفظ</button>
    </form>
  )
}
