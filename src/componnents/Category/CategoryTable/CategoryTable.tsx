import React, { useEffect ,useState } from 'react';
import './CategoryTable.css';
import delet from "../../../assets/images/button_icon/delete.svg";
import edite from "../../../assets/images/button_icon/edite.svg";
import switch_on from './../../../assets/images/button_icon/Switche_on.svg';
import switch_off from './../../../assets/images/button_icon/switch_OFF.svg';
import plus from './../../../assets/images/button_icon/Vector.svg';
import { TableProps } from '../../../types/types';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Delete_CategoryPopup from '../Delete_CategoryPopup/Delete_CategoryPopup';

type TDataitem = {
    id?: string;
    name?: string;
    published?: boolean;
    
}
type TData = Array<TDataitem>;


const CategoryTable: React.FC<TableProps> = ({ title, buttonLabel, columns }) => {
    const[data,setData] = useState<TData>([]);
    const [showPopup, setShowPopup] = useState(false);
    const [itemId, setItemId] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/categories/addCategory');
    };

   
    useEffect(()=> {
        axios.get("http://127.0.0.1:8000/api/categorys").then((res: any)=>setData(res.data)
        ).catch((error:any)=>console.log(error))
    });
  
    const deleteItem = (itemId: string) => {
        setItemId(itemId); 
        setShowPopup(true); 
    };
    
  
    const handleEdit = (itemId: string) => {
        navigate(`/categories/update-category/${itemId}`);
    };

    
    return (
        <div className="table-container">
            <div className="table-header">
                <h2>{title}</h2>
                <button  className='NA_button_Name' onClick={handleClick}>
                  <img src={plus} alt = "" style={{margin:'10px'}}/>   {buttonLabel}
                </button>

            </div>

            <table className='NA_table'>
                <thead >
                    <tr>
                        {columns.map((column) => (
                            <th key={column} className='Na_column_name'>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody >
                    {data.map((row:any) => {
                        return (
                            <tr>
                            <td className='NA_Name_row'>{row.name}</td>
                            <td>
                            <ul style={{listStyle:'none'}}>
                                {row.brands.map((brand: any) => (
                                <li>{brand.name}</li>
                                ))}
                            </ul>
                            </td>
                            <td> {row.products_count}  </td>
                            <td>
                                {row.published ? <img src={switch_on} alt="switch-on " className='NA_product-image'/> : <img src={switch_off} alt="switch_off " className='NA_product-image'/>}
                            </td>
                            <td>
                                <div className="ne-action NA_display">
                                   
                                <div className="ne-delete-icon" style={{ cursor: 'pointer' }}>
                                    <img src={delet} alt="delete icon" className='delete-edite' onClick={() => deleteItem(row.id)} />
                                    {showPopup && (
                                    <Delete_CategoryPopup id={itemId || ''} onClose={() => setShowPopup(false)} />
                                   )}

                                </div>
                                    <div className="ne-edit-icon " style={{cursor:'pointer'}}>
                                        <img src={edite} alt="edite icon"  className='delete-edite' onClick={() => handleEdit(row.id)} />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default CategoryTable;