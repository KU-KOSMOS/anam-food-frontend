import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RowBox } from "../style/flexbox";

const LoginButton = () => {
    return (
        <ProfileRowBox>
            <Link to="/login">
                <ProfilePicture alt="profile" src="/static/logo.png" />
            </Link>
        </ProfileRowBox>
    );
};

const ProfilePicture = styled.img`
    width: 2rem;
    height: 2rem;
`;

const ProfileRowBox = styled.section`
    display: inline-flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
`;

export default LoginButton;
