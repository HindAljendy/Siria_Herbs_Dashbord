import React from 'react'
import Policy from '../../pages/Policy/Policy'
import NavigationLinks from '../NavigationLinks/NavigationLinks'
import './PrivacyPolicy.css'
const PrivacyPolicy = () => {
  return (
<>
<div className='ne-privacy-policy'>
  
  <NavigationLinks navigateMain='إدارة سياسات الموقع' navigateLink='لوحة التحكم' navigateSubmain='الاعدادات' />
  <Policy/>
</div>
</>
  )
}

export default PrivacyPolicy