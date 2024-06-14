import React, { FC } from 'react';
import ImageUpload from '../ImageUpload/ImageUpload ';
import SaveButton from '../Buttons/SaveButton';
import TextArea from '../TextArea/TextArea';

interface Props {

}

const PageHeaderForm: FC<Props> = () => {
    return (
        <>
            <form className="form">
                <div className="form-header">رأس الصفحة</div>
                <ImageUpload name="صورة رأس الصفحة" />
                <TextArea name="العنوان"/>
                <SaveButton/>
            </form>
        </>
    );
};

export default PageHeaderForm;
