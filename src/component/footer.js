import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
        <FooterStyled>고려대학교 컴퓨터학과 KOSMOS 안암 뭐먹지? 팀</FooterStyled>
    );
};

const FooterStyled = styled.footer`
    font-size: 1.125rem;
    padding-top: 3rem;
    text-align: center;
`;

export default Footer;
