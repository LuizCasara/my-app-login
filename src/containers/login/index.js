import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Access from './components/Access.js';
import BackgroundImage from './components/BackgroundImage.js';

const StyledCol = styled(Col)`
    padding: 0px;
`

const Login = function () {
    return (
        <Container fluid >
            <Row>
                <StyledCol xl={6} lg={6} md={4} sm={12}>
                    <BackgroundImage />
                </StyledCol>
                <Col xl={6} lg={6} md={8} sm={12}>
                    <Access />
                </Col>
            </Row>
        </Container >
    )
}

export default Login
