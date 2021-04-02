import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ show }) => {
    return (
        <nav id="sidebar" className={show ? "active" : ""}>
            <div className="sidebar-header">
                <h3>Electro</h3>
            </div>
            <ul className="list-unstyled components">
                <li>
                    <Link to="/panel/manageProduct">Manage Product</Link>
                </li>
                <li>
                    <Link to="/panel/addProduct">Add Product</Link>
                </li>
                <li>
                    <Link to="/panel/editProduct">Edit Product</Link>
                </li>
            </ul>
            <ul className="list-unstyled CTAs">
                <li>
                    <Link to="/" className="download">Back to Home</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;