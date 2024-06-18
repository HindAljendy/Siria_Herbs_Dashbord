import React, { useState } from "react";
import './ImageUplodeStyle.css';
import { FaRegTrashCan } from "react-icons/fa6";

// Define the props interface if needed for future enhancements
interface ImageUploadProps {
  name: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ name }) => {


 // Use string for fileName state since it will hold strings
  const [fileName, setFileName] = useState<string>('لم يتم اختيار صورة');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Use optional chaining to avoid runtime errors
    if (file) {
      setFileName(file.name);
    } else {
      setFileName('لم يتم اختيار صورة');
    }
  };

  const triggerFileInput = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Ensure the element exists before calling click
    const fileInputElement = document.getElementById('fileInput') as HTMLInputElement | null;
    if (fileInputElement) {
      fileInputElement.click();
    }
  };

  return (
    <div className="container input">
      <label htmlFor="name"> {name}</label>
      <div className="file-upload-wrapper">
        <button className="choose-file-btn" onClick={triggerFileInput}>
          <span>اختر ملف</span>
        </button>
        <div className="file-name">{fileName}</div>
        <input
          type="file"
          id="fileInput"
          onChange={handleFileChange}
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