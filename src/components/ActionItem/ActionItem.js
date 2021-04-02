import React from 'react';
import { Button } from 'react-bootstrap';
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

const ActionItem = (props) => {
    const { _id, productName, price, category } = props.item;

    return (
        <>
            <tbody style={{ fontWeight: "500" }}>
                <tr>
                    <td>{productName}</td>
                    <td>{category || ""}</td>
                    <td>${price}</td>
                    <td>
                        <Button
                            as={"label"}
                            htmlFor="upload"
                            variant="outline-success"
                            className="p-1"
                            onClick={() => props.handleEditItem(_id)}>
                            <FiEdit style={{ fontSize: "1.2rem" }} />
                        </Button>
                        <Button
                            as={"label"}
                            htmlFor="upload"
                            variant="outline-danger"
                            className="p-1 ml-2"
                            onClick={() => props.handleDeleteItem(_id)}>
                            <RiDeleteBinLine style={{ fontSize: "1.3rem" }} />
                        </Button>
                    </td>
                </tr>
            </tbody>
        </>
    );
};

export default ActionItem;