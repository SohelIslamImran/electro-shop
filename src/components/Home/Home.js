import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    return (
        <Container>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    products.map(product => <Product product={product} />)
                }
            </Row>
        </Container>
    );
};

export default Home;