import React, { FC } from 'react';
import './PageHeaderForm.css'
import ImageUpload from '../ImageUpload/ImageUpload ';
import SaveButton from '../Buttons/SaveButton';
import TextArea from '../TextArea/TextArea';

interface Props {

}

const PageHeaderForm: FC<Props> = () => {
    return (
        <>
            <form className="form MA_form_padding">
                <div className="form-header HJ_FontColor_black MA_margin">رأس الصفحة</div>
                <ImageUpload name="صورة رأس الصفحة" />
                <TextArea name="العنوان" />
                <div className='MA_container_Button'>
                    <SaveButton />
                </div>

            </form>
        </>
    );
};
export default PageHeaderForm;
