import React from 'react'
import './Evaluation.css'
import EvaluationForm from '../EvaluationForm/EvaluationForm'
import { Link } from 'react-router-dom'

export const Evaluation = () => {
    return (
        <form className='form MA_form_padding YS_Margin_bottom'>
            <div className='form-header HJ_FontColor_black YS_margin_36'>قيمنا</div>

            <div>
                <EvaluationForm />
                <div className='YS_line'></div>
                <EvaluationForm />
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

