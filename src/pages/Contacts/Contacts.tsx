import React from 'react'
import AddContact from '../../componnents/Form/AddContact/AddContact' ;
import NavigationLinks from '../../componnents/NavigationLinks/NavigationLinks';

const Contacts = () => {
  return (
    <div>
        <NavigationLinks 
        navigateMain="اعدادات جهات الاتصال " 
        navigateLink="لوحة التحكم " 
        navigateSubmain="الاعدادات" 
      />
    <AddContact contactId="1"/>
    </div>
  )
}

export default Contacts