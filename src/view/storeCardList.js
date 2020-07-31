import React, { useEffect, useState } from "react";
import StoreCard from "../component/storeCard";

const StoreCardList = () => {
    const [state, setState] = useState(false);
    const [data, setData] = useState("");

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
        <>
            {state
                ? data.store.map((shop, idx) => {
                      return <StoreCard key={idx} props={shop} />;
                  })
                : "loading"}
        </>
    );
};

export default StoreCardList;
