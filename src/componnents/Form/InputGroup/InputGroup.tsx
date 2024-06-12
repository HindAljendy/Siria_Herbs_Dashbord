import React from 'react'

export default function InputGroup() {
  return (
    <div className='input input-group'>
    <div >
      <label htmlFor="name">الاسم</label>
      <input type="text" name="name" id="" />
    </div>
    <div >
      <label htmlFor="name1">الاسم الفرعي 1 </label>
      <input type="text" name="name1" id="" />
    </div>
    <div >
      <label htmlFor="name2">الاسم الفرعي 2 </label>
      <input type="text" name="name2" id="" />
    </div>
    </div>
  )
}
