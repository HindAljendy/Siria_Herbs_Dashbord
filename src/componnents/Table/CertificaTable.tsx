import React from 'react';
import './Table.css';
import delet from "../../assets/images/button_icon/delete.svg";
import edite from "../../assets/images/button_icon/edite.svg";
// import switch_on from './../../assets/images/button_icon/Switche_on.svg';
// import switch_off from './../../assets/images/button_icon/switch_OFF.svg';
import { TableProps } from '../../types/types';


const CertificaTable: React.FC<TableProps> = ({ title, buttonLabel, columns, data }) => {
    return (
        <div className="table-container">
            <div className="table-header">
                <h2>{title}</h2>
                <button  className='NA_button_Name'>
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
                                        <img src={edite} alt="edite icon" />
                                    </div>
                                    <div className="ne-delete-icon">
                                        <img src={delet} alt="delete icon" />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CertificaTable;
