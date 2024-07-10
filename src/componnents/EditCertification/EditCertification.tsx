import React from 'react'
import NavigationLinks from '../NavigationLinks/NavigationLinks'
import Certifica from '../Form/CertificaForm/Certifica'

const EditCertification = () => {
    return (
        <>
            <NavigationLinks
                navigateMain='تعديل شهادة'
                navigateLink='الواجهة الرئيسية' navigateSubmain='الاعدادات '
            />
            <Certifica />

        </>


    )
}

export default EditCertification