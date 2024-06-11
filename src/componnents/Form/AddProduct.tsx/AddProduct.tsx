import Selector from '../Selector/Selector'
import './AddProductStyle.css'
import TextArea from '../TextArea/TextArea'
import ImageUpload from '../ImageUpload/ImageUpload '
import InputGroup from '../InputGroup/InputGroup'
export default function AddProduct() {
  return (
    <form className='form'>
      <div className='form-header'>إضافة منتج</div>
      <InputGroup/>
      <div className="input">
       <Selector name="الفئة" options={['فئة1' , 'فئة2' , 'فئة3']}/>
       <Selector name="الماركة" options={['ماركة1' , 'ماركة2' , 'ماركة3']}/>
      </div>
      <div className='input'>
        <label htmlFor="name">الاسم</label>
        <input type="text" name="name" id="" />
      </div>
      <TextArea name="وصف المنتج"/>
      <TextArea name="وصف المكونات"/>
      <ImageUpload/>
      {/* <button type="submit">حفظ</button> */}
    </form>
  )
}
