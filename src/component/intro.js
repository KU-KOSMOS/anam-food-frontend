import React from "react";
import styled from "styled-components";

import StoreCardList from "../view/storeCardList";

const Intro = () => {
    return (
        <>
            <MainHeader className="MainHeader">
                오늘, 안암에서
                <br />
                무엇을 드시고 싶으세요?
            </MainHeader>
            <Comment>맛있는 곳들을 골라봤어요.</Comment>
            <StoreCardList />
        </>
    );
};

export default Intro;

const MainHeader = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    padding-bottom: 1.5rem;
    word-break: keep-all;
`;

const Comment = styled.div`
    display: inline;
    margin-top: 1rem;
    font-weight: 500;
    font-size: 1.8rem;
`;
