import React from 'react';
import './Table.css';
import { TiEdit } from "react-icons/ti";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsToggle2On, BsToggle2Off } from "react-icons/bs";

type TableProps = {
title: string;
buttonLabel: string;
columns: string[];
data: { [key: string]: any }[];
onButtonClick: () => void;
};

const Table: React.FC<TableProps> = ({ title, buttonLabel, columns, data, onButtonClick }) => {
return (
    <div className="table-container">
    <div className="table-header">
        <h2>{title}</h2>
        <button onClick={onButtonClick}>{buttonLabel}</button>
    </div>
<table>
        <thead>
        <tr>
            {columns.map((column) => (
            <th key={column}>{column}</th>
            ))}
        </tr>
        </thead>
        <tbody>
        {data.map((row, index) => (
            <tr key={index}>
            <td>{row.name}</td>
            <td><img src={row.image} alt={row.name} className="product-image" /></td>
            <td>{row.quantity}</td>
            <td>
                {row.published ? <BsToggle2On className="toggle" color="rgba(41, 201, 47, 1)" /> : <BsToggle2Off color="gray" />}
            </td>
            <td>
                <RiDeleteBin6Line className="action-icon delete-icon" />
                <TiEdit className="action-icon edit-icon" />
            </td>
            </tr>
))}
        </tbody>
</table>
    </div>
);
};

export default Table;
