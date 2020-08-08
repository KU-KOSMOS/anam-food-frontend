import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { RowBox, ColBox } from "../style/flexbox";
import StarView from "./starView";

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
                    <ColBox style={{ alignSelf: "flex-start", flex: "1" }}>
                        <RowBox
                            style={{
                                justifyContent: "space-between",
                                alignItems: "baseline",
                            }}
                        >
                            <MainHeader>{data.store.name}</MainHeader>

                            <StarView star={data.store.star} />
                        </RowBox>
                        <Excerpt>{data.store.excerpt}</Excerpt>
                        <Location>{data.store.address}</Location>
                    </ColBox>
                </StoreRowBox>
            </Layout>
        );
    } else {
        return <div>Loading</div>;
    }
};

const Layout = styled.div`
    padding-top: 2rem;
`;

const StoreRowBox = styled(RowBox)`
    padding: 1.5rem;
    align-items: center;
    flex-wrap: wrap;

    background: white;

    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    border-radius: 25px;
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
