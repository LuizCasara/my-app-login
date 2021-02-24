import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    width: 256px;
    min-height: 48px;
    border: 1px solid #989FDB;
    box-sizing: border-box;
    margin-top: 30px;
    margin-bottom: 30px;
    
    background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);
    box-shadow: 0px 10px 25px #CF99DB;
    border-radius: 8px;

    color: white;
    text-transform: uppercase;
    font-size: 16px;

    @media(max-width: 769px) {
        margin-top: 5px;
        width: 168px;
    }
    
`

const Input = function ({ text, onClick }) {
    return (
        <Button onClick={onClick}>{text}</Button>
    )
}

export default Input
