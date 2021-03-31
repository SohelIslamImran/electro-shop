import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <div>
              <Button as={Link} to="/addProduct" variant="primary">Add Product</Button>
        </div>
    );
};

export default Admin;