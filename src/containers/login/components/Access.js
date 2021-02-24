import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
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
    const [emailError, setEmailError] = useState(null);
    const history = useHistory();

    const change = {
        email: (value) => onChange('email', value.target.value),
        password: (value) => onChange('password', value.target.value),
    }

    const blur = {
        email: (value) => validMail(value),
        password: (value) => validPassword(value),
    }

    function onChange(field, value) {
        const newAccess = { ...access };
        newAccess[field] = value;
        setAccess(newAccess);
        if (field == "email" && emailError != null) {
            setEmailError(null);
        }
    }

    function validMail(value) {
        const regex = /\S+@\S+\.\S+/;
        const validEmail = regex.test(String(value.target.value).toLowerCase());
        if (!validEmail || value == null || value.target.value.length <= 0) {
            setEmailError(getMessage("error.email"));
        }
    }

    function validPassword(value) {
        if (value == null || value.target.value.length <= 0) {
            return;
        }
        onChange('password', md5(value.target.value))
    }

    async function onClick() {
        if (emailError == null && access.password != "" && access.email != "") {
            const response = await LoginRepository.signIn(access);
            if (response.token != null) {
                history.push("/home");
                localStorage.setItem('userToken', response.token);
                setAccess({ email: "", password: "" });
            }
        }
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
                    error={emailError}
                    onChange={change.email}
                    onBlur={blur.email}
                />
                <Input
                    label={getMessage('password')}
                    placeholder="********"
                    value={access.password}
                    onChange={change.password}
                    onBlur={blur.password}
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
