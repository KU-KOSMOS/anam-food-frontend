import React from "react";
import styled from "styled-components";
import { RowBox, ColBox } from "../style/flexbox";
import Login from "./login";
import NavSearch from "./navSearch";

import StoreCardList from "../view/storeCardList";

const MainComponent = () => {
    return (
        <>
            <MainStyle className="MainLayout">
                <Mainh3>안암 뭐먹지? 프로젝트</Mainh3>
                <RowBox style={{ float: "right" }}>
                    <Login />
                </RowBox>
                <div>
                    <MainHeader className="MainHeader">
                        오늘, 안암에서
                        <br />
                        무엇을 드시고 싶으세요?
                    </MainHeader>
                    <Comment>맛있는 곳들을 골라봤어요.</Comment>
                    <NavSearch />
                    </div>
                <StoreCardList />
            </MainStyle>
        </>
    );
};

const InlineFlex = styled.div`
    display: inline-flex;
`;

const StickyRowBox = styled(RowBox)`
    position: sticky;
    position: -webkit-sticky;
    top: 0;
`;

const Comment = styled.div`
    display: inline;
    margin-top: 1rem;
    font-weight: 500;
    font-size: 1.8rem;
`;

const Mainh3 = styled.h3`
    padding-top: 2rem;
    display: inline;
    z-index: 2;

    font-size: 1.5rem;
`;

const MainHeader = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    padding-bottom: 1.5rem;
    word-break: keep-all;
`;

const MainStyle = styled.div``;

const MainColBox = styled(ColBox)``;

export default MainComponent;
