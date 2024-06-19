import "./ProductBox.css";
import React from 'react';
import dublicate from "../../assets/images/button_icon/dublicate.svg";
import delet from "../../assets/images/button_icon/delete.svg";
import edite from "../../assets/images/button_icon/edite.svg";
import { ProductBoxProps } from "../../types/types";


const ProductBox: React.FC<ProductBoxProps> = ({
  img,
  title_1,
  title_2,
  title_3,
  brandName,
  productNum,
  weight,
  encapsolation,
  numInPackage,
}) => {
  return (
    <div className="ne-product-box ">
      <div className="ne-box-text">
        <img src={img} alt="product Img" className="ne-product-img" />
        <p className="ne-title-1"> {title_1} </p>
        <p className="ne-title-2"> {title_2} </p>
        <p className="ne-title-3">{title_3}</p>
      </div>
      <div className="ne-box-info">
        <div className="ne-brand">
          <h1 className="ne-brand-title">
            ماركة : <span>{brandName}</span>
          </h1>
          <h1 className="ne-brand-title">
            رقم المنتج : <span> {productNum} </span>
          </h1>
          <h1 className="ne-brand-title">
            الوزن : <span>{weight} </span>
          </h1>
          <h1 className="ne-brand-title">
            التغليف : <span>{encapsolation}</span>
          </h1>
          <h1 className="ne-brand-title">
            العدد في الطرد : <span>{numInPackage}</span>
          </h1>
        </div>
      </div>

      <div className="ne-action">
        <div className="ne-edit-icon">
          <img src={edite} alt="edite icon" />
        </div>
        <div className="ne-dublicate-icon">
          <img src={dublicate} alt="dublicate icon" />
        </div>
        <div className="ne-delete-icon">
          <img src={delet} alt="delete icon" />
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
