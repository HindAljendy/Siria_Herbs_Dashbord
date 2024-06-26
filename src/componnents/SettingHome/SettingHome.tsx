import React from 'react'
import './SettingHome.css'
import { Story } from '../Story/Story'
import { Evaluation } from '../Evaluation/Evaluation'
import PageHeaderForm from '../Form/PageHeaderForm/PageHeaderForm'

const SettingHome = () => {
  return (
    <div className='YS-setting-home'>
      <PageHeaderForm heroId={1} />
      <Story />
      <Evaluation />
    </div>
  )
}

export default SettingHome