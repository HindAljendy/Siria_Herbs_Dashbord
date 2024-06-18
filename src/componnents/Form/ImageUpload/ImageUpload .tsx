import React, { useState } from "react";
import './ImageUplodeStyle.css';
import { FaRegTrashCan } from "react-icons/fa6";

// Define the props interface including onChange prop
interface ImageUploadProps {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ name, onChange }) => {
  const [fileName, setFileName] = useState<string>('لم يتم اختيار صورة');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName('لم يتم اختيار صورة');
    }
    onChange(e); // Call the onChange prop here
  };

  const triggerFileInput = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const fileInputElement = document.getElementById('fileInput') as HTMLInputElement | null;
    if (fileInputElement) {
      fileInputElement.click();
    }
  };

  return (
    <div className=" input">
      <label htmlFor="name"> {name}</label>
      <div className="file-upload-wrapper">
        <button className="choose-file-btn" onClick={triggerFileInput}>
          <span>اختر ملف</span>
        </button>
        <div className="file-name">{fileName}</div>
        <input
          type="file"
          id="fileInput"
          onChange={handleFileChange} // Ensure handleFileChange is used here
          style={{ display: "none" }}
        />
        <span className="icon">
          <FaRegTrashCan />
        </span>
      </div>
    </div>
  );
};

export default ImageUpload;
