import axios from 'axios';
import React, { useContext } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { UserContext } from '../../App';

const Checkout = () => {
    const { loggedInUser } = useContext(UserContext);
    const { cart } = useContext(UserContext);
    console.log(cart);

    const handleCheckout = () => {
        const oderDetails = { ...loggedInUser, product: cart, orderTime: new Date() };

        console.log(oderDetails);

        axios.post('http://localhost:5000/addOrder', oderDetails)
            .then(response => {
                response.data && console.log("Successfully Added");
            })
            .catch(error => {
                console.log(error);
            });;
    }

    return (
        <Container>
            <h2>Checkout</h2>
            <div className="shadow px-4 pt-4 my-4" style={{ borderRadius: "15px" }}>
                <Table hover responsive>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{cart.productName}</td>
                            <td>1</td>
                            <td>${cart.price}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="2">Total</td>
                            <td>${cart.price}</td>
                        </tr>
                    </tfoot>
                </Table>
            </div>
            <div className="text-right">
                <Button onClick={handleCheckout} variant="primary" size="lg">Checkout</Button>
            </div>
        </Container>
    );
};

export default Checkout;