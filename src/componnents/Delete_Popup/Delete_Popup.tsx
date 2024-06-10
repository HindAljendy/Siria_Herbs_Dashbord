import './Delete_Popup.css'
import img from './../../assets/images/pop_up/Vector.svg'
const Delete_Popup = () => {
  return (
    <div className='MA_Delete_Popup'>
        <div className="box">
            <div>
                <img src={img} alt="" />
            </div>

            <div className='paragraph'>
                <p>
                هل انت متاكد من حذف هذا العنصر
                </p>
            </div>

            <div className="btns">
                <button className='btn gray'>الغاء</button>
                <button className='btn red'>تم</button>
            </div>
        </div>
    </div>
  )
}

export default Delete_Popup