import React from "react";
import styled from "styled-components";
import { RowBox } from "../style/flexbox";

const Login = () => {
    return (
        <ProfileRowBox>
            <ProfilePicture alt="profile" src="/static/logo.png" />
        </ProfileRowBox>
    );
};

const LoginTitle = styled.div`
    font-size: 1.5rem;
    font-weight: 500;
    padding-left: 1rem;
`;

const ProfilePicture = styled.img`
    width: 2rem;
    height: 2rem;
`;

const ProfileRowBox = styled.div`
    display: inline-flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
`;

export default Login;
