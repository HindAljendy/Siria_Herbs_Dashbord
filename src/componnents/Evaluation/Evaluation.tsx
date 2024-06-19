import React from 'react'
import './Evaluation.css'
import EvaluationForm from '../EvaluationForm/EvaluationForm'

export const Evaluation = () => {
    return (
        <div className='evaluation-section'>
            <div className='YS-form-header'>قيمنا</div>
            <EvaluationForm />
            <EvaluationForm />
            <div className="YS-left">
                <a href='' className="YS-add-form" >
                    <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.390625 10.4873V16.6152H24.7559V10.4873H0.390625ZM9.22852 0.84375V26.7227H15.8936V0.84375H9.22852Z" fill="#283760" />
                    </svg> <span> إضافة قسم</span>
                </a>
            </div>
        </div>
    )
}
