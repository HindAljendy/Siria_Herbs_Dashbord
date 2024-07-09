import React, { useEffect, useState } from 'react';
import './Table.css';
import delet from "../../assets/images/button_icon/delete.svg";
import edite from "../../assets/images/button_icon/edite.svg";
// import switch_on from './../../assets/images/button_icon/Switche_on.svg';
// import switch_off from './../../assets/images/button_icon/switch_OFF.svg';
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
        if (deleteCertificate) {
            axios.delete(`http://127.0.0.1:8000/api/certification/${certificateId}/delete`)
                .then(response => {
                    console.log('Brand deleted successfully:', response.data);
                })
                .then(() => setUpdate(!update))
                .catch(error => {
                    console.error(' error delete the brand!', error);
                });
        }
    }, [deleteCertificate]);

    const handleClosePopup = () => {
        setIsPopupVisible(false);
    };

    return (
        <div className="table-container">
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
                            <td className='NA_Name_row'>{row.description}</td>
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