import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import PuffLoader from "react-spinners/PuffLoader";
import Product from '../Product/Product';

const loaderStyle = `
  display: block;
  margin: auto;
`;

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://electro-server.herokuapp.com/products')
            .then(response => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    return (
        <Container>
            <PuffLoader loading={loading} css={loaderStyle} size={150} />
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    products.map(product => <Product key={product._id} product={product} />)
                }
            </Row>
        </Container>
    );
};

export default Home;