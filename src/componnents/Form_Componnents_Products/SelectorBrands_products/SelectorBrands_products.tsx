import React, { useEffect, useState } from 'react';
import { FormProduct } from '../../../types/types';
import axios from 'axios';


interface SelectorProps {
  name: string;
  formData: FormProduct;
  setFormData: (formData: FormProduct) => void;

}
interface DataBrand {
  id: number;
  name: string;
}

const SelectorBrands_products: React.FC<SelectorProps> = ({ name, formData, setFormData }) => {

  const [brands, setBrands] = useState<DataBrand[]>([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/brands", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        setBrands(response.data.data.data);
        console.log(response.data.data.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  const [color, setColor] = useState('gray');


  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setFormData({ ...formData, brand_id: parseInt(e.target.value) });
    setColor("var(--blue-color)");
  };


  return (
    <div className='input HJ_width_select'>
      <label htmlFor="brand" className='HJ_FontColor_blue'>{name}</label>
      <select name="brand" id="brand" value={formData.brand_id} onChange={handleChange} style={{ color: color }}>
        <option value="" disabled selected > اختار الماركة</option>
        {brands && brands.map((brand, index) => (
          <option key={index} value={brand.id}>{brand.name}</option>
        ))}


      </select>

    </div>
  );
};

export default SelectorBrands_products;


