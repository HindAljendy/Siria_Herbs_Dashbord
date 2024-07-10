import React, { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { FormProduct } from "../../../types/types";

// Define the props interface if needed for future enhancements
interface ImageUploadProps {
  name: string;
  formData: FormProduct;
  setFormData: (formData: FormProduct) => void;

}

const ImageUpload_ProductsMainImage: React.FC<ImageUploadProps> = ({ name, formData, setFormData }) => {

  // Use string for fileName state since it will hold strings
  const [fileNameMainImage, setFileNameMainImage] = useState<string>('لم يتم اختيار صورة');
  

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Use optional chaining to avoid runtime errors
    
    console.log(e.target.files);
    
    if (file) {
      setFileNameMainImage(file.name);
      setFormData({
        ...formData,
        main_image:file ,
      });
      console.log(file);
    } else {
      setFileNameMainImage('لم يتم اختيار صورة');
    }
  };

  const triggerFileInput = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Ensure the element exists before calling click
    const fileInputElement = document.getElementById('mainFileInput') as HTMLInputElement | null;
    if (fileInputElement) {
      fileInputElement.click();
    }
  };

  return (
    <div className="container input">
      <label htmlFor="name" className="HJ_FontColor_gray"> {name}</label>
      <div className="file-upload-wrapper">
        <button className="choose-file-btn" onClick={triggerFileInput}>
          <span>اختر ملف</span>
        </button>
        <div className="file-name">{fileNameMainImage}</div>
        <input
          type="file"
          id="mainFileInput"
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

export default ImageUpload_ProductsMainImage;

