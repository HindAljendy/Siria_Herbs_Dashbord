import React from 'react';

export default function Checkbox() {

  return (
    <div className="input">
      <div className='checkbox'>
        <input type="checkbox" name="صحتك_ذهب" id="health_gold"  />
        <label htmlFor="health_gold" className='HJ_label'>صحتك ذهب</label>
      </div>
      <div className='checkbox'>
        <input type="checkbox" name="ملكية" id="ownership"  />
        <label htmlFor="ownership">ملكية</label> 
      </div>

    </div>
  )
}


