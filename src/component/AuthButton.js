import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
const AuthButton = () => {
    return (
        <Button>
            하나은행 87691015990707 홍승재
        </Button>
    );
};


const Button = styled.button`
    width:100%;
    background: ${oc.indigo[2]};  
    height: 2rem;
    cursor: pointer;
    justify-contents: center;
    font-size:10px;
    color: white;
    border: none;
`;



export default AuthButton;