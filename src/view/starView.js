import React from "react";
import { RowBox, ColBox } from "../style/flexbox";
import styled from "styled-components";

const StarView = ({ star, size = "2rem" }) => {
    const empty = 5 - star;
    const stars = [];
    for (let i = 0; i < empty; i++) {
        stars.push(
            <Star
                width={size}
                key={i}
                className="star"
                alt="empty_star"
                src="/static/star.png"
            />
        );
    }
    for (let i = 0; i < star; i++) {
        stars.push(
            <Star
                width={size}
                className="star"
                key={empty + i}
                alt="filled_star"
                src="/static/star-fill.png"
            />
        );
    }

    return <StarBox>{stars.map((tag, idx) => tag)}</StarBox>;
};

const StarBox = styled(RowBox)``;

const Star = styled.img`
    width: ${(props) => props.width};
    height: ${(props) => props.width};
`;

export default StarView;
