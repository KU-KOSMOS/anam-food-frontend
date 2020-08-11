import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import StoreCard from "./storeCard";
import { ColBox } from "../style/flexbox";
import { Link } from "react-router-dom";

const StoreCardList = () => {
    const [state, setState] = useState(false);
    const [data, setData] = useState(null);

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
                      return (
                          <React.Fragment key={idx}>
                              <StoreCard key={idx} props={shop} />
                              <Margin />
                          </React.Fragment>
                      );
                  })
                : "loading"}
        </StoreContainer>
    );
};

const Margin = styled.div`
    margin-bottom: 1.5rem;
`;

const StoreContainer = styled(ColBox)`
    padding-top: 2rem;

    margin-right: auto;
`;

export default StoreCardList;
