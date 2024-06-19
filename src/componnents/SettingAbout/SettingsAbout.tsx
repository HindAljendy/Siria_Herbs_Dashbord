import React from 'react'
import './SettingAbout.css'
import PageHeaderForm from '../Form/PageHeaderForm/PageHeaderForm'
import AboutUsForm from '../Form/AboutUsForm/AboutUsForm'
import OurFutueresForm from '../Form/OurFuturesForm/OurFutueresForm'

const SettingsAbout = () => {
  return (
    <>
      <div className='SettingsAbout'>
        <PageHeaderForm />
        <AboutUsForm />
        <OurFutueresForm />

      </div>

    </>
  )
}

export default SettingsAbout