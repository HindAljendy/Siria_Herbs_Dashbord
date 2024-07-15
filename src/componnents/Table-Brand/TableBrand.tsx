import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './TableBrand.css';
import delet from "../../assets/images/button_icon/delete.svg";
import edite from "../../assets/images/button_icon/edite.svg";
import switch_on from './../../assets/images/button_icon/Switche_on.svg';
import switch_off from './../../assets/images/button_icon/switch_OFF.svg';
import { TableProps } from '../../types/types';
import Delete_Popup from '../Delete_Popup/Delete_Popup';
import axios from 'axios';

type Tbrand = {
    update: boolean;
    setUpdate(value: boolean): void;
}

const Table: React.FC<TableProps & Tbrand> = ({ title, buttonLabel, columns, data, update, setUpdate }) => {
    // const [tableData, setTableData] = useState(data);
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [deleteBrand, setDeleteBrand] = useState(false);
    const [brandId, setBrandId] = useState<number>();


    const navigate = useNavigate();
    const token = localStorage.getItem("token");


    const handleDeleteClick = (id: number) => {
        setIsPopupVisible(true);
        setBrandId(id);
    };

    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json",
            },
        };
        if (deleteBrand) {
            axios.delete(`http://127.0.0.1:8000/api/brands/${brandId}/delete`, config)
                .then(response => {
                    console.log('Brand deleted successfully:', response.data);
                })
                .then(() => setUpdate(!update))
                .catch((error) => {
                    if (error.response.status === 401) {
                        navigate('/login');
                    } else {
                        console.error(' error delete the brand!', error);
                    }
                });
        }

    }, [deleteBrand]);

    const handelEditeClick = (id: number) => {
        navigate(`update/${id}`)
    }

    const handleClosePopup = () => {
        setIsPopupVisible(false);
    };

    return (
        <div className="IB_table-container">
            <div className="IB_table-header">
                <h2>{title}</h2>
                <Link to="/brands/addbrand">
                    <button className='IB_button_Name'>
                        {buttonLabel}
                    </button>
                </Link>
            </div>
            <table className='IB_table'>
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column} className='IB_column-name'>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data?.map((row, index) => (
                        <tr key={index}>
                            <td className='IB_Name-row'>{row.name}</td>
                            <td><img src={row.main_image} alt={row.name} className="IB_product-image" /></td>
                            <td>{row.products_count}</td>
                            <td>
                                {row.published ? <img src={switch_on} alt="switch-on" /> : <img src={switch_off} alt="switch-off" />}
                            </td>
                            <td>
                                <div className="IB_display">
                                    <div className="ne-edit-icon">
                                        <img src={edite} alt="edit icon" onClick={() => handelEditeClick(row.id)} />
                                    </div>
                                    <div className="ne-delete-icon" onClick={() => handleDeleteClick(row.id)}>
                                        <img src={delet} alt="delete icon" />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isPopupVisible && (
                <div onClick={handleClosePopup}>
                    <Delete_Popup setIsPopupVisible={setIsPopupVisible} isPopupVisible={isPopupVisible} setDeleteBrand={setDeleteBrand} />
                </div>
            )}
        </div>
    );
};
export default Table;