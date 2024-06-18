import React, { useEffect, useState } from 'react'
import './Evaluation.css'
import EvaluationForm from '../EvaluationForm/EvaluationForm'
import axios from 'axios';
import { TEvaluation } from '../../types/types';

export const Evaluation = () => {
    const [evaluations, setEvaluations] = useState<TEvaluation[]>([]);
    const [update, setUpdate] = useState<boolean>(false);
    const [hidenForm, setHidenForm] = useState<boolean>(false);

    const handelUpdate = () => {
        setUpdate(!update);
    }

    const handelHidenForm = () => {
        setHidenForm(!hidenForm);
    }

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/evaluations")
            .then(response => setEvaluations(response.data.data))
            .catch(error => console.error(error));
    }, [update])

    const evaluationDefult = {
        id: '',
        description: '',
        title: '',
        icon: null
    }

    return (
        <div className='evaluation-section'>
            <div className='YS-form-header'>قيمنا</div>
            {evaluations?.map(evaluation => (
                <EvaluationForm key={evaluation.id} mode='edit' evaluation={evaluation} setUpdate={handelUpdate} handelHidenForm={handelHidenForm} />
            ))}
            {hidenForm && <EvaluationForm mode='create' evaluation={evaluationDefult} setUpdate={handelUpdate} handelHidenForm={handelHidenForm} />}
            {!hidenForm && <div className="YS-left">
                <button className="YS-add-form" onClick={handelHidenForm} >
                    <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.390625 10.4873V16.6152H24.7559V10.4873H0.390625ZM9.22852 0.84375V26.7227H15.8936V0.84375H9.22852Z" fill="#283760" />
                    </svg> <span> إضافة قسم</span>
                </button>
            </div>}
        </div>
    )
}
