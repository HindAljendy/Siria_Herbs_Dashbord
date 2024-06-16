import React from 'react'
import ImageUpload from '../Form/ImageUpload/ImageUpload '
import TextArea from '../Form/TextArea/TextArea'

export const StoryForm = () => {
  return (
    <form className='form YS-form' >
      <div className="YS-left">
        <a href='' className="YS-remove-form" >
          <svg width="15" height="6" viewBox="0 0 15 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.2383 0.269531V5.78711H0.444336V0.269531H14.2383Z" fill="#283760" />
          </svg> <span> إزالة قسم</span>
        </a>
      </div>
      <ImageUpload name='صورة/فديو' />
      <TextArea name='الوصف' />
      <div className="YS-left"><button className='YS-save-boutton' type='submit'>حفظ</button></div>
    </form >
  )
}
