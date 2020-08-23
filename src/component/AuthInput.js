import React from 'react';
import oc from 'open-color';
import styled from 'styled-components';

const AuthInput = ({label, ...rest}) => {
    return (
      
        <Wrapper>
        <Label>{label}</Label>
        <Input {...rest}/>
        </Wrapper>
      
    );
};

const Wrapper= styled.div`
    & + &{
        margin-top : 0.5rem;
    }
`;

const Label = styled.div`
    font-size: 16px;
    color: ${oc.gray[7]};
`;

const Input = styled.input`
    font-size: 15px;
    font-color: ${oc.gray[3]};
    outline-style : none;
    width:100%;
    margin-bottom : 20px;
    border : 1px solid ${oc.gray[4]};
   
    &: focus{
        outline: none;
    }
    
`;





export default AuthInput;