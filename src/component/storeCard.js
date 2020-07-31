import React from "react";
import { RowBox, ColBox } from "../style/flexbox";
import styled from "styled-components";
import StarView from "../view/starView";

const StoreCard = ({ props }) => {
    const { id, name, imgsrc, star } = props;

    return (
        <CardRowBox>
            <img className="shopPhoto" alt={name} src={imgsrc} />
            <CardColBox>
                <Name>{name}</Name>
                <img alt="verified" src="./static/circle.png" />
                <StarView star={star} />
            </CardColBox>
        </CardRowBox>
    );
};

const Name = styled.div`
    font-size: 24px;
    padding-bottom: 0.3rem;
`;

const CardColBox = styled(ColBox)`
    img {
        width: 32px;
        height: 32px;
    }

    align-items: flex-end;
`;

const CardRowBox = styled(RowBox)`
    .shopPhoto {
        width: 124px;
        height: 96.75px;

        align-self: center;
        border-radius: 15px;
    }
    margin-top: 1.5rem;
    padding: 20px;

    justify-content: space-between;

    max-width: 22rem;
    background: white;

    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    border-radius: 25px;
`;

export default StoreCard;
