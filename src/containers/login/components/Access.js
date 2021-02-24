import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import md5 from 'md5';

import Input from './Input';
import Button from './Button';
import getMessage from '../../../utils/getMessage';
import LoginRepository from '../../../repositories/login';

const Container = styled.div`
    position: relative;
    top: 20%;    

    @media(max-width: 769px) {
        position: fixed;
        background: white;
        padding: 20px;
        border-radius: 8px;

        left: 50px;
        right: 50px;
        min-width: 278px;
        top: 20px;
        height: 357px;
    }
`
const Flex = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    text-align: center;
    align-items: center;
`
const Text = styled.h1`
    width: 256px;
    text-align: left;
    line-height: 20px;
`
const H1 = styled(Text)`
    font-weight: 400;
    font-size: 40px;
    color: #383E71;
    line-height: 48px;

    @media(max-width: 769px) {
        font-size: 24px;
    }
`
const H3 = styled(Text)`
    font-weight: 600;
    font-size: 16px;
    color: #989FDB;

    @media(max-width: 769px) {
        font-size: 12px;
    }
`
const H4 = styled(Text)`
    font-weight: 600;
    font-size: 14px;
    color: #989FDB;
    text-align: center;

    @media(max-width: 769px) {
        font-size: 12px;
    }
`

const Access = function () {
    const [access, setAccess] = useState({ email: "", password: "" });

    const change = {
        email: (value) => onChange('email', value.target.value),
        password: (value) => onChange('password', md5(value.target.value)),
    }

    const blur = {
        email: (value) => validMail(value),
    }

    function onChange(field, value) {
        const newAccess = { ...access };
        newAccess[field] = value;
        setAccess(newAccess);
    }

    function validMail(value) {
        const regex = /\S+@\S+\.\S+/;
        const validEmail = regex.test(String(value.target.value).toLowerCase());
        if (!validEmail) {
            alert(getMessage("error.email"));
        }
    }

    function onClick() {
        const token = LoginRepository.signIn(access);
        localStorage.setItem('userToken', token);
    }

    return (
        <Container>
            <Flex>
                <H1>{getMessage('access.title')}</H1>
                <H3>{getMessage('access.message')}</H3>
                <Input
                    label={getMessage('email')}
                    placeholder={getMessage('email.placeholder')}
                    value={access.email}
                    onChange={change.email}
                    onBlur={blur.email}
                />
                <Input
                    label={getMessage('password')}
                    placeholder="********"
                    value={access.password}
                    onChange={change.password}
                    type="password"
                />
                <Button text={getMessage('enter')} onClick={onClick} />
                <H4>{getMessage('access.forgotPassword')}
                    <Link to="/forgotPassword">{getMessage('access.forgotPassword.clickHere')}</Link>
                </H4>
            </Flex>
        </Container>
    )
}

export default Access
