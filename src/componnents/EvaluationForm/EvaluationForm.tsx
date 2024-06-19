import React from 'react';
import ImageUpload from '../Form/ImageUpload/ImageUpload ';
import TextArea from '../Form/TextArea/TextArea';
import { Link } from 'react-router-dom';
import SaveButton from '../Form/Buttons/SaveButton';

const EvaluationForm = () => {

  return (
    <form className='form'>
      <div>
        <div className='YS-left'>
          <Link to='' className="YS-Link-form" >
            <svg width="15" height="6" viewBox="0 0 15 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.2383 0.269531V5.78711H0.444336V0.269531H14.2383Z" fill="#283760" />
            </svg> <span> إزالة القسم</span>
          </Link>
        </div>
        <ImageUpload name='الأيقونة' />
      </div>
      <div className='input'>
        <label htmlFor="title">العنوان</label>
        <input type="text" name="title" id="title" />
      </div>
      <TextArea name='الوصف' />
      <div className='YS_container_Button'>
        <SaveButton />
      </div>

    </form>





  );
};

export default EvaluationForm;