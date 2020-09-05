import React from "react";
import styled from "styled-components";
import { RowBox } from "../style/flexbox";

const SearchPage = () => {
    return (
        <>
            <Layout
                style={{
                    display: "flex",
                    alignItems: "baseline",
                }}
            >
                <RowBox style={{ width: "100%" }}>
                    <Input style={{ flex: 1 }} placeholder="검색하세요!" />
                    <Submit>검색</Submit>
                </RowBox>
            </Layout>
            <Layout>
                <h3>식당 위치별로 검색하기</h3>
                <RowBox className="searchBox">
                    <Radio type="checkbox" id="cb1" />
                    <Label htmlFor="cb1">정경대 후문</Label>

                    <Radio type="checkbox" id="cb2" />
                    <Label htmlFor="cb2">이공계 후문</Label>

                    <Radio type="checkbox" id="cb3" />
                    <Label htmlFor="cb3">고대앞 사거리</Label>

                    <Radio type="checkbox" id="cb4" />
                    <Label htmlFor="cb4">안암 오거리</Label>

                    <Radio type="checkbox" id="cb5" />
                    <Label htmlFor="cb5">법대후문</Label>

                    <Radio type="checkbox" id="cb6" />
                    <Label htmlFor="cb6">제기동</Label>

                    <Radio type="checkbox" id="cb7" />
                    <Label htmlFor="cb7">정문</Label>
                </RowBox>
            </Layout>
            <Layout>
                <h3>음식 분류별로 검색하기</h3>
                <RowBox className="searchBox">
                    <Radio type="checkbox" id="cat_cb1" />
                    <Label htmlFor="cat_cb1">한식</Label>

                    <Radio type="checkbox" id="cat_cb2" />
                    <Label htmlFor="cat_cb2">중식</Label>

                    <Radio type="checkbox" id="cat_cb3" />
                    <Label htmlFor="cat_cb3">일식</Label>

                    <Radio type="checkbox" id="cat_cb4" />
                    <Label htmlFor="cat_cb4">양식</Label>

                    <Radio type="checkbox" id="cat_cb5" />
                    <Label htmlFor="cat_cb5">경양식</Label>

                    <Radio type="checkbox" id="cat_cb6" />
                    <Label htmlFor="cat_cb6">고기</Label>

                    <Radio type="checkbox" id="cat_cb7" />
                    <Label htmlFor="cat_cb7">분식</Label>
                </RowBox>
            </Layout>
        </>
    );
};

const Submit = styled.label`
    user-select: none;

    // box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    border-radius: 25px;
    margin-left: 1rem;

    background: #c8d7ff;

    padding: 0.5rem 1rem;
`;

const Radio = styled.input`
    &:active {
        color: yellow;
    }
    &:checked {
        color: yellow;
    }
`;

const Label = styled.label`
    user-select: none;
    background: #ffffffbb;
    text-align: center;
    width: 6rem;
    padding: 1rem;
    margin: 1rem 1rem 0 0;
    word-break: keep-all;

    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    border-radius: 25px;

    &:checked {
        background: yellow;
    }
`;

const Input = styled.input`
    background-color: #fff;
    padding: 0.5rem 0.8rem;

    font-size: 1rem;

    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    border-radius: 25px;
`;

const Layout = styled.div`
    margin-top: 2rem;
    background: #ffffffbb;
    padding: 1.5rem;

    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    border-radius: 25px;
`;

export default SearchPage;
