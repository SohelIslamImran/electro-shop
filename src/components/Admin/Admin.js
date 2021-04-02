import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import AddProduct from '../AddProduct/AddProduct';
import EditProduct from '../EditProduct/EditProduct';
import ManageProduct from '../ManageProduct/ManageProduct';
import Sidebar from '../Sidebar/Sidebar';
import AdminNavbar from './AdminNavbar';

const Admin = () => {
    const { adminPanel } = useParams();
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <>
            <div className="wrapper">
                <Sidebar show={showSidebar} />
                <div id="content">
                    <AdminNavbar setShowSidebar={setShowSidebar} show={showSidebar} />
                    {adminPanel === "addProduct" ? <AddProduct />
                        : adminPanel === "editProduct" ? <EditProduct />
                            : <ManageProduct />}
                </div>
            </div>
        </>
    );
};

export default Admin;