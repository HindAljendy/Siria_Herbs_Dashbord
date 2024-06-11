import { useState } from "react";
import './ImageUplodeStyle.css'
import { FaRegTrashCan } from "react-icons/fa6";
const ImageUpload = () => {
 
  const [fileName, setFileName] = useState('لم يتم اختيار صورة');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName('لم يتم اختيار صورة');
    }
  };

  const triggerFileInput = (e) => {
    e.preventDefault();
    document.getElementById('fileInput').click();
  };

  return (
    <div className="container input">
      <label htmlFor="name">الصورة الرئيسية</label>
      <div className="file-upload-wrapper">
        <button className="choose-file-btn" onClick={triggerFileInput}>
          <span>اختر ملف</span>
        </button>
        <div className="file-name">{fileName}</div>
        <input
          type="file"
          id="fileInput"
          onChange={handleFileChange}
          style={{display:"none"}}
        />
        <span className="icon">
           <FaRegTrashCan/>
        </span>
      </div>
    </div>
  );
};


export default ImageUpload;
