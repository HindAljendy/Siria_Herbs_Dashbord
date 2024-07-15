import React, { useEffect, useState } from 'react';
import './Table.css';
import delet from "../../assets/images/button_icon/delete.svg";
import edite from "../../assets/images/button_icon/edite.svg";
import { TableProps } from '../../types/types';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Delete_Popup from '../Delete_Popup/Delete_Popup';

type TCertificate = {
    update: boolean;
    setUpdate(value: boolean): void;
}

const CertificaTable: React.FC<TableProps & TCertificate> = ({ title, buttonLabel, columns, data, update, setUpdate }) => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [deleteCertificate, setDeleteCertificate] = useState(false);
    const [certificateId, setCertificateId] = useState<number>();

    const handelCreateAction = () => {
        navigate('/settings/certificates/add')
    }
    const handelEditeAction = (id: number) => {
        navigate(`/settings/certificates/update/${id}`)
    }

    const handleDeleteAction = (id: number) => {
        setIsPopupVisible(true);
        setCertificateId(id);
    };

    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json",
            },
        };

        if (deleteCertificate) {
            axios.delete(`http://127.0.0.1:8000/api/certification/${certificateId}/delete`, config)
                .then(response => {
                    console.log('Brand deleted successfully:', response.data);
                })
                .then(() => setUpdate(!update))
                .catch((error) => {
                    if (error.response.status === 401) {
                        navigate('/login');
                    } else {
                        console.error('Error!', error);
                    }
                });
        }
    }, [deleteCertificate]);

    const handleClosePopup = () => {
        setIsPopupVisible(false);
    };

    return (
        <div className="table-container HJ_pa HJ_Margin_Add">
            <div className="table-header">
                <h2>{title}</h2>
                <button onClick={handelCreateAction} className='NA_button_Name'>
                    {buttonLabel}
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
                    {data?.map((row, index) => (
                        <tr key={index}>
                            <td><img src={row.icon} alt={`icone ${row.name}`} className="NA_product-image" /></td>
                            <td className='NA_Name_row'>{row.name}</td>
                            <td className='NA_Name_row'>{row.subname}</td>
                            <td><img src={row.photo} alt={`photo ${row.name}`} className="NA_product-image" /></td>
                            <td className='NA_Name_row HJ_width_description'>{row.description}</td>
                            <td>
                                <div className="ne-action NA_display">
                                    <div className="ne-edit-icon ">
                                        <img src={edite} alt="edite icon" onClick={() => handelEditeAction(row.id)} />
                                    </div>
                                    <div className="ne-delete-icon">
                                        <img src={delet} alt="delete icon" onClick={() => handleDeleteAction(row.id)} />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isPopupVisible && (
                <div onClick={handleClosePopup}>
                    <Delete_Popup setIsPopupVisible={setIsPopupVisible} isPopupVisible={isPopupVisible} setDeleteBrand={setDeleteCertificate} />
                </div>
            )}
        </div>
    );
};

export default CertificaTable;
