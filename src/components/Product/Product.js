import React, { useContext } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Product = (props) => {
    const { productName, price, productImage } = props.product;
    const { setCart } = useContext(UserContext);

    return (
        <Col>
            <Card className="shadow mb-4" style={{ borderRadius: "20px", border: 0 }}>
                <div style={{ maxwidth: "300px", height: "300px"}}>
                    <Card.Img
                        className="w-100"
                        style={{ objectFit: "contain", maxHeight: "300px" }}
                        variant="top"
                        src={productImage}
                    />
                </div>
                <Card.Body>
                    <Card.Title as={"h4"} >{productName}</Card.Title>
                </Card.Body>
                <Card.Body className="d-flex justify-content-between align-items-center">
                    <Card.Title
                        as={"h3"}
                        className="mb-1"
                        style={{ fontWeight: "600" }}>
                        ${price}
                    </Card.Title>
                    <Button
                        as={Link}
                        to="checkout"
                        onClick={() => setCart(props.product)}
                        variant="info"
                        className="py-2 px-4"
                        style={{ borderRadius: "10px"}}>
                        Buy Now
                    </Button>
                </Card.Body>
            </Card>
        </Col >
    );
};

export default Product;