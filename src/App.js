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
    position: relative;
    margin-left: auto;
    margin-right: auto;

    max-width: 1440px;
`;

export default App;
