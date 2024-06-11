import React from 'react'

export default function TextArea({name}) {
  return (
    <div className='input'>
    <label htmlFor="description"> {name}</label>
    <textarea name="description" id="description"></textarea>
  </div>
  )
}
