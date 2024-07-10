import React from 'react'
import './SettingHome.css'
import { Story } from '../Story/Story'
import { Evaluation } from '../Evaluation/Evaluation'
import PageHeaderForm from '../Form/PageHeaderForm/PageHeaderForm'
import NavigationLinks_Settings from '../NavigationLinks/NavigationLinks_Settings'

const SettingHome = () => {
  return (
    <div className='YS-setting-home'>

      <NavigationLinks_Settings
        navigateMain='اعدادات الصفحة الرئيسية'
        navigateLink='الواجهة الرئيسية' navigateSubmain='الاعدادات' navigateSubmain2="الصفحات"
      />
      <PageHeaderForm heroId={1} />
      <Story />
      <Evaluation />
    </div>
  )
}

export default SettingHome