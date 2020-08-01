import React, { useState } from "react";
import { RowBox, ColBox } from "../style/flexbox";
import styled from "styled-components";

const NavSearch = () => {
    const [searchState, setSearchState] = useState(false);

    const stateReverse = () => {
        console.log("rev!" + searchState);
        setSearchState(!searchState);
    };

    return (
        <SearchColBox>
            <SearchImg onClick={stateReverse} src="./static/search-24.png" />

            <div style={{ position: "relative" }}>
                <SearchListColBox state={searchState}>
                    <SearchChoice>음식점 상세검색</SearchChoice>
                    <SearchChoice>분류별로 검색</SearchChoice>
                    <SearchChoice>위치별로 검색</SearchChoice>
                    <SearchChoice>룰렛 돌리기</SearchChoice>
                </SearchListColBox>
            </div>
        </SearchColBox>
    );
};

const SearchImg = styled.img`
    width: 2rem;
    height: 2rem;
`;

const SearchColBox = styled(ColBox)`
    top: 2rem;
    padding-top: 0.4rem;

    display: inline-flex;
    float: right;
    align-items: flex-end;
    text-align: right;
`;

const SearchListColBox = styled(ColBox)`
    background: rgba(255, 255, 255, 0.8);
    border-radius: 1rem;
    padding: 1rem;

    position: absolute;
    width: max-content;
    transform: translateX(-100%);
    top: 1rem;

    display: ${(props) => (props.state === true ? "unset" : "none")};
    opacity: ${(props) => (props.state === true ? "1" : "0")};

    animation: ${(props) =>
        props.state &&
        `growDown 400ms ease-in-out forwards;
    transform-origin: top center`};

    @keyframes growDown {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

const SearchChoice = styled.div`
    padding-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 600;

    z-index: 2;
`;

export default NavSearch;
