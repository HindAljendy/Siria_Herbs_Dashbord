import Checkbox from './Checkbox/Checkbox'
import './FormStyle.css'
import Selector from './Selector/Selector'
export default function Form() {
  return (
    <form className='form'>
      <div className='form-header'>إضافة فئة إلى النظام</div>
      <div className='input'>
        <label htmlFor="name">الاسم</label>
        <input type="text" name="name" id="" />
      </div>
      <Selector name="الفئة" options={['فئة1' , 'فئة2' , 'فئة3']}/>
      <Checkbox/>
      <button type="submit">حفظ</button>
    </form>
  )
}
