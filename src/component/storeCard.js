import React from "react";
import { RowBox, ColBox } from "../style/flexbox";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StarView from "../view/starView";

const StoreCard = ({ props }) => {
    const { id, name, imgsrc, star } = props;

    return (
        <Link
            to={`/store/${id}`}
            state={props}
            key={id}
            style={{ width: "auto" }}
            className="CardLink"
        >
            <CardRowBox className="Card">
                <img className="shopPhoto" alt={name} src={imgsrc} />
                <CardColBox>
                    <Name>{name}</Name>
                    <div style={{ textAlign: "right" }}>
                        <img
                            alt="verified"
                            className="circle"
                            src="/static/circle.png"
                        />
                        <section className="starContainer">
                            <StarView star={star} />
                        </section>
                    </div>
                </CardColBox>
            </CardRowBox>
        </Link>
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
    margin-left: 1rem;

    justify-content: space-between;
    align-items: flex-end;
`;

const CardRowBox = styled(RowBox)`
    .shopPhoto {
        width: 10rem;
        height: 8rem;

        align-self: center;
        border-radius: 15px;
    }

    padding: 1.5rem;

    justify-content: space-between;

    max-width: 25rem;
    background: #ffffffbb;

    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    border-radius: 25px;
`;

export default StoreCard;
