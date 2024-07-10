import React from 'react'
import Certifica from '../Form/CertificaForm/Certifica'
import NavigationLinks from '../NavigationLinks/NavigationLinks'

const AddCertification = () => {
    return (
        <>
            <NavigationLinks
                navigateMain='اضافة شهادة'
                navigateLink='الواجهة الرئيسية' navigateSubmain='الاعدادات '
            />
            <Certifica />

        </>
    )
}

export default AddCertification