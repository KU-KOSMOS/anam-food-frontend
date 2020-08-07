import React from "react";
import MainComponent from "./component/mainComponent";
import styled from "styled-components";

import "./style/App.scss";

function App() {
    return (
        <>
            <Background>
                <Layout className="Layout">
                    <MainComponent />
                </Layout>
            </Background>
        </>
    );
}

const Background = styled.div`
    position: absolute;
    width: 100%;
    top: 0px;

    background-image: url("./static/Vectorvec.png"),
        url("./static/Vectorvec-1.png");

    background-repeat: no-repeat;
    background-position-x: center;
    background-attachment: fixed;
`;

const Layout = styled.div`
    left: 50%;

    margin-left: auto;
    margin-right: auto;

    width: 90%;
    max-width: 1080px;
`;

export default App;
