import React from "react";
import Background from "./view/background";
import MainComponent from "./component/mainComponent";
import styled from "styled-components";

import "./style/App.scss";

function App() {
    return (
        <>
            <Layout className="Layout">
                <MainComponent />
            </Layout>
            <Background />
        </>
    );
}

const Layout = styled.div`
    left: 50%;

    margin-left: auto;
    margin-right: auto;

    width: 90%;
    max-width: 1080px;
`;

export default App;
