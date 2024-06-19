import React, { useState } from "react";
import './ImageUplodeStyle.css';
import { FaRegTrashCan } from "react-icons/fa6";

interface ImageUploadProps {
  name: string;
  label?: string;
  className?: string;
  onImageUpload: (name: string, file: File) => void;
  value?: File | null;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ name, label, className, onImageUpload, value }) => {
  const [fileName, setFileName] = useState<string>(' اختر ملف');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      onImageUpload(name, file);
    } else {
      setFileName('لم يتم اختيار صورة');
    }
  };

  const triggerFileInput = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const fileInputElement = document.getElementById(name) as HTMLInputElement | null;
    if (fileInputElement) {
      fileInputElement.click();
    }
  };

  return (
    <div className={`container input ${className}`}>
      {label && <label htmlFor={name}>{label}</label>}
      <div className="file-upload-wrapper">
        <button className="choose-file-btn" onClick={triggerFileInput}>
          <span>لم يتم  اختيار ملف بعد  </span>
        </button>
        <div className="file-name">{fileName}</div>
        <input
          type="file"
          id={name}
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