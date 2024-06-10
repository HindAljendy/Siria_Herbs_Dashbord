import './Delete_Popup.css'
import img from './../../assets/images/pop_up/Vector.svg'
const Delete_Popup = () => {
  return (
    <div className='Delete_Popup'>
        <div className="box">
            <div>
                <img src={img} alt="" />
            </div>

            <div className='paragraph'>
                <p>
                Are you sure you want to delete this records?
                </p>
            </div>

            <div className="btns">
                <button className='btn gray'>Cancel</button>
                <button className='btn red'>Ok</button>
            </div>
        </div>
    </div>
  )
}

export default Delete_Popup