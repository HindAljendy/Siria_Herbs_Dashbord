import React from 'react'
import './SettingAbout.css'
import PageHeaderForm from '../Form/PageHeaderForm/PageHeaderForm'
import AboutUsForm from '../Form/AboutUsForm/AboutUsForm'
import OurFutueresForm from '../Form/OurFuturesForm/OurFutueresForm'
import NavigationLinks_Settings from '../NavigationLinks/NavigationLinks_Settings'

const SettingsAbout = () => {
  return (
    <>
      <NavigationLinks_Settings
        navigateMain='اعدادات  صفحة عنا'
        navigateLink='الواجهة الرئيسية' navigateSubmain='الاعدادات' navigateSubmain2="الصفحات"
      />
      <div className='SettingsAbout'>
        <PageHeaderForm heroId={2} />
        <AboutUsForm />
        <OurFutueresForm />

      </div>

    </>
  )
}

export default SettingsAbout