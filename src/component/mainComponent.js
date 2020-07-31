import React from "react";
import styled from "styled-components";
import { RowBox, ColBox } from "../style/flexbox";

import StoreCardList from "../view/storeCardList";

const MainComponent = () => {
    return (
        <MainStyle className="MainLayout">
            <MainColBox>
                <Mainh3>안암 뭐먹지? 프로젝트</Mainh3>
                <MainHeader className="MainHeader">
                    오늘, 안암에서
                    <br />
                    무엇을 드시고 싶으세요?
                </MainHeader>
                <ColBox>
                    <Comment>저희가 추천해드리는 식당이에요.</Comment>
                    <StoreCardList />
                </ColBox>
            </MainColBox>
        </MainStyle>
    );
};

const Comment = styled.div`
    margin-top: 1rem;
    font-weight: 500;
    font-size: 1.3125rem;
`;

const Mainh3 = styled.h3`
    font-size: 1.3125rem;
`;

const MainHeader = styled.h1`
    font-size: 3rem;
    font-weight: 700;
`;

const MainStyle = styled.div``;

const MainColBox = styled(ColBox)``;

export default MainComponent;
