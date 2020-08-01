import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import StoreCard from "../component/storeCard";
import { ColBox } from "../style/flexbox";

const StoreCardList = () => {
    const [state, setState] = useState(false);
    const [data, setData] = useState("");

    const scrollRef = useRef();

    useEffect(() => {
        const func = () => {
            const data = fetch("./storeList.json").then((res) => {
                return res.json();
            });

            return data;
        };

        const fetching = async () => {
            const data = await func();
            setData(data);
            setState(true);
        };

        fetching();
    }, []);

    return (
        <StoreContainer ref={scrollRef}>
            {state
                ? data.store.map((shop, idx) => {
                      return <StoreCard key={idx} props={shop} />;
                  })
                : "loading"}
        </StoreContainer>
    );
};

const StoreContainer = styled(ColBox)`
    padding: 0 10px 0 10px;
    padding-top: 2rem;

    margin-right: 0;

    height: 100%;
`;

export default StoreCardList;
