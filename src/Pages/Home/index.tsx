import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from 'react';
function Home() {
    return ( 
        <Container fluid>
            <h3>hello</h3>
            <Link to="/products/2">
                products
            </Link>
        </Container>
     );
}

export default Home;