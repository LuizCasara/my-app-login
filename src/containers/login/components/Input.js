import React from 'react';
import styled from 'styled-components';

const Flex = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 20px 0; 
`
const StyledInput = styled.input`
    width: 256px;
    height: 48px;
    border: 1px solid #989FDB;
    box-sizing: border-box;
    border-radius: 8px;
    color: #383E71;
    padding: 0 0 0 20px;

    @media(max-width: 769px) {
        font-size: 12px;
    }
`
const Label = styled.a`
    font-size: 10px;
    line-height: 48px;
    font-weight: 400;
    text-transform: uppercase;
    color: #383E71;
    text-align: left;
    margin: 0px 0 -10px 5px;

    @media(max-width: 769px) {
        line-height: 24px;
        margin: 0px 0 0px 5px;
    }
`

const Input = function (props) {
    const {
        label, placeholder, value, onChange, onBlur, type = "",
    } = props;

    return (
        <Flex>
            <Label>{label}</Label>
            <StyledInput value={value} placeholder={placeholder} onChange={onChange} onBlur={onBlur} type={type} />
        </Flex>
    )
}

export default Input
