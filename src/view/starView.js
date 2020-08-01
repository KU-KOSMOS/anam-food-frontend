import React from "react";
import { RowBox, ColBox } from "../style/flexbox";
import styled from "styled-components";

const StarView = ({ star }) => {
    const empty = 5 - star;
    const stars = [];
    for (let i = 0; i < empty; i++) {
        stars.push(
            <img
                key={i}
                className="star"
                alt="empty_star"
                src="./static/star.png"
            />
        );
    }
    for (let i = 0; i < star; i++) {
        stars.push(
            <img
                className="star"
                key={empty + i}
                alt="filled_star"
                src="./static/star-fill.png"
            />
        );
    }

    return <StarBox>{stars.map((tag, idx) => tag)}</StarBox>;
};

const StarBox = styled(RowBox)`
    flex: 1;
    align-items: flex-end;
`;

export default StarView;
