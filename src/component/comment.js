import React from "react";
import styled from "styled-components";
import { RowBox, ColBox } from "../style/flexbox";
import StarView from "../view/starView";

const Comment = ({ title, date, name, excerpt, score }) => {
    return (
        <CommentStyle>
            <CommentDate>{date}</CommentDate>
            <RowBox style={{ justifyContent: "space-between" }}>
                <ColBox>
                    <CommentTitle>{title}</CommentTitle>
                    {excerpt.map((paragraph, idx) => (
                        <p key={paragraph + idx}>{paragraph}</p>
                    ))}
                    <hr style={{ margin: "1rem 0" }} />
                </ColBox>
                <ColBox style={{ textAlign: "right" }}>
                    <StarView star={score} size="1.5rem" />
                    <h3>{name}</h3>
                </ColBox>
            </RowBox>
        </CommentStyle>
    );
};

export default Comment;

const CommentDate = styled.nav`
    color: #6b6b6b;
    text-align: right;
`;

const CommentTitle = styled.h1`
    font-size: 1.3rem;
`;

const CommentStyle = styled.article`
    width: 300px;
`;
