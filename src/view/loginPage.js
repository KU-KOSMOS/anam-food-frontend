import React from 'react'
import styled from 'styled-components';
import oc from 'open-color';
import AuthWrap from  '../component/AuthWrap'
import AuthInput from '../component/AuthInput';
import AuthButton from '../component/AuthButton';
const LoginPage = () => {
    return <>
        <AuthWrap title="로그인 하나 머글래요?">
            <AuthInput label="아이디" placeholder="아이디 입력좀"/>    
            <AuthInput label ="비밀번호" placeholder="비밀번호 입력좀"/>

            <AuthButton>안녕~</AuthButton>
        </AuthWrap>
    </>
}

export default LoginPage