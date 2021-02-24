import React from 'react';
import styled from 'styled-components';
import ImagemLogin from '../../../assets/images/login.png';

const StyledBackground = styled.div`
    width: auto;
    height: 100vh;
    background: linear-gradient(0deg, #130525 0%, rgba(105, 57, 153, 20%) 100%), url(${ImagemLogin});
    background-size: cover;
`
const BackgroundImage = function ({ children }) {
    return (
        <StyledBackground>
            {children}
        </StyledBackground>
    )
}

export default BackgroundImage
