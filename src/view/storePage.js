import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { RowBox, ColBox } from "../style/flexbox";
import StarView from "./starView";
import Comment from "../component/comment";

const StorePage = ({ match }) => {
    // const storeNumber = match.params.id;
    const [state, setState] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetching = async () => {
            const data = await fetch("../store_1.json");
            setData(await data.json());
            setState(true);
        };

        fetching();
    }, []);

    if (state) {
        console.log(data);
        return (
            <Layout>
                <StoreRowBox>
                    <StoreImg alt={data.store.name} src={data.store.imgsrc} />
                    <RowBox
                        style={{ justifyContent: "space-between", flex: "1" }}
                    >
                        <ColBox style={{ alignSelf: "flex-start", flex: "1" }}>
                            <RowBox style={{ alignItems: "baseline" }}>
                                <MainHeader>{data.store.name}</MainHeader>
                                &nbsp;
                                <h3 style={{ color: "green" }}>영업 중</h3>
                            </RowBox>
                            <Excerpt>{data.store.excerpt}</Excerpt>
                            <Location>{data.store.address}</Location>
                            <Location>{data.store.telephone}</Location>
                        </ColBox>
                        <ColBox>
                            <StarView
                                style={{ alignSelf: "flex-start" }}
                                star={data.store.star}
                            />
                            <StoreScore>전체 평점 {data.store.star}/5</StoreScore>
                        </ColBox>
                    </RowBox>
                </StoreRowBox>
                <h2>최근 리뷰</h2>
                <CommentBox>
                    <Comment
                        title="댓글 1"
                        date="2020/02/02"
                        name="최용욱"
                        excerpt={["hi", "hi2", "hi3"]}
                        score={4}
                    />
                    <Comment
                        title="댓글 1"
                        date="2020/02/02"
                        name="최용욱"
                        excerpt={["hi", "hi2", "hi3"]}
                        score={4}
                    />
                    <Comment
                        title="댓글 1"
                        date="2020/02/02"
                        name="최용욱"
                        excerpt={["hi", "hi2", "hi3"]}
                        score={4}
                    />
                </CommentBox>
            </Layout>
        );
    } else {
        return <div>Loading</div>;
    }
};

const StoreScore = styled.label`
    text-align: right;
    font-size: 1.5rem;
    font-weight: 600;
`;

const CommentDate = styled.nav`
    color: #6b6b6b;
`;

const CommentTitle = styled.h1`
    font-size: 1.3rem;
`;

const CommentBox = styled(RowBox)`
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Layout = styled.div`
    margin-top: 2rem;
    background: #ffffffbb;
    padding: 1.5rem;

    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    border-radius: 25px;
`;

const StoreRowBox = styled(RowBox)`
    margin-bottom: 1.5rem;
    align-items: center;
    flex-wrap: wrap;
`;

const StoreImg = styled.img`
    display: block;
    margin-right: 1rem;
    height: 8rem;
    width: auto;

    border-radius: 1rem;
`;

const MainHeader = styled.h1`
    font-size: 2rem;
    font-weight: 700;
`;

const Location = styled.address`
    font-style: normal;
    font-size: 1.125rem;
    font-weight: 500;
`;

const Excerpt = styled.article`
    font-size: 1rem;
`;

export default StorePage;
