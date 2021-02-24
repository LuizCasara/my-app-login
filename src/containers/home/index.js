import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import getMessage from '../../utils/getMessage';
import Button from '../login/components/Button';

const Container = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    text-align: center;
`

const Home = function () {
    const history = useHistory();

    function logout() {
        history.push("/");
        localStorage.removeItem('userToken');
    }

    return (
        <Container>
            {getMessage('welcome')}
            <br /><br />
            <Button onClick={logout} text={getMessage('logout')}/>
        </Container>
    )
}

export default Home;
