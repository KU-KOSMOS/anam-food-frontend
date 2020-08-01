import React from "react";
import { RowBox, ColBox } from "../style/flexbox";
import styled from "styled-components";
import StarView from "../view/starView";

const StoreCard = ({ props }) => {
    const { id, name, imgsrc, star } = props;

    return (
            <CardRowBox className="Card">
                <img className="shopPhoto" alt={name} src={imgsrc} />
                <CardColBox>
                    <Name>{name}</Name>
                    <img
                        alt="verified"
                        className="circle"
                        src="./static/circle.png"
                    />
                    <StarView star={star} />
                </CardColBox>
            </CardRowBox>
    );
};

const Name = styled.div`
    font-size: 1.5rem;
    padding-bottom: 0.3rem;
`;

const CardColBox = styled(ColBox)`
    .circle {
        width: 2rem;
        height: 2rem;
    }

    align-items: flex-end;
`;

const CardRowBox = styled(RowBox)`
    .shopPhoto {
        width: 10rem;
        height: 8rem;

        align-self: center;
        border-radius: 15px;
    }

    margin-bottom: 1.5rem;
    padding: 1.5rem;

    justify-content: space-between;

    max-width: 23rem;
    background: white;

    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    border-radius: 25px;
`;

export default StoreCard;
