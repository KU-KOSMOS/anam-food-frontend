import React from "react";
import styled from "styled-components";

const Background = () => {
    return (
        <>
            <SvgStyle className="wave-container">
                <img alt="background1" src="./static/Vectorvec.png" />
                <img alt="background2" src="./static/Vectorvec-1.png" />
            </SvgStyle>
        </>
    );
};

const SvgStyle = styled.div`
    img {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: -1;
    }
`;

export default Background;
