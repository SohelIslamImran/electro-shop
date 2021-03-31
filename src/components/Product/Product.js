import React, { useContext } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Product = (props) => {
    const { productName, price, productImage } = props.product;
    const { setCart } = useContext(UserContext);

    return (
        <Col>
            <Card className="shadow">
                <div style={{ width: "300px", height: "300px" }}>
                    <Card.Img className="w-100 h-100" variant="top" src={productImage} />
                </div>
                <Card.Body>
                    <Card.Title>{productName}</Card.Title>
                </Card.Body>
                <Card.Body>
                    <Card.Title>${price}</Card.Title>
                    <Button as={Link} to="checkout" onClick={() => setCart(props.product)} variant="primary">Buy Now</Button>
                </Card.Body>
            </Card>
        </Col >
    );
};

export default Product;