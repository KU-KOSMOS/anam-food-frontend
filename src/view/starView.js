import React from "react";
import { RowBox, ColBox } from "../style/flexbox";
import styled from "styled-components";

const StarView = ({ star }) => {
    const empty = 5 - star;
    const stars = [];
    for (let i = 0; i < empty; i++) {
        stars.push(<img alt="empty_star" src="./static/star.png" />);
    }
    for (let i = 0; i < star; i++) {
        stars.push(<img alt="filled_star" src="./static/star-fill.png" />);
    }

    return <StarBox>{stars.map((tag, idx) => tag)}</StarBox>;
};

const StarBox = styled(RowBox)`
    padding-top: 0.5rem;
`;

export default StarView