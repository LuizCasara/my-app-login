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

const PageNotFound = function () {
    const history = useHistory();

    function goBack() {
        history.push("/");
    }

    return (
        <Container>
            {getMessage('pageNotFound')}
            <br /><br />
            <Button onClick={goBack} text={getMessage('comeback')}/>
        </Container>
    )
}

export default PageNotFound;
