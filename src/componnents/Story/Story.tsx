import React from 'react'
import './Story.css'
import { StoryForm } from '../StoryForm/StoryForm'
import { Link } from 'react-router-dom'

export const Story = () => {
    return (

        <form className='form MA_form_padding'>
            <div className='form-header HJ_FontColor_black YS_margin'>القصة</div>
            <div>
                <StoryForm />
                <div className='YS_line'></div>
                <StoryForm />
    
                <div className='YS_line_End'></div>

                <div className="YS-left">
                    <Link to='' className="YS-Link-form " >
                        <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.390625 10.4873V16.6152H24.7559V10.4873H0.390625ZM9.22852 0.84375V26.7227H15.8936V0.84375H9.22852Z" fill="#283760" />
                        </svg> <span> اضافة قسم جديد</span>
                    </Link>
                </div>

            </div>


        </form>
    )
}
