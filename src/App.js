import React, {useState} from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./style/App.scss";
import Login from "./component/loginButton";
import Intro from "./component/intro";
import Footer from "./component/footer";
import NavSearch from "./component/navSearch";
import Navbar from "./component/Navbar";
import StorePage from "./view/storePage";
import LoginPage from "./view/loginPage";
import SearchPage from "./view/searchPage";
import { RowBox } from "./style/flexbox";

function App() {
    const[sidebar, setSidebar] = useState(false);

    const showSidebar = ()=>setSidebar(!sidebar)
    const onOtherClick= ()=>{
      if(sidebar){
        setSidebar(!sidebar);
      }
    }
  
    return (
        <><Router>
            <Background onClick= {onOtherClick}>
                <Navbar sidebar= {sidebar} showSidebar={showSidebar}></Navbar>
                <Layout className="Layout MainLayout">
                    
                        <Link to="/">
                            <Mainh3>안암 뭐먹지? 프로젝트</Mainh3>
                        </Link>
                        <RowBox style={{ float: "right" }}>
                            <Login />
                            <NavSearch />
                        </RowBox>
                        <Switch>
                            <Route exact path="/" component={Intro} />
                            <Route path="/store/:id" component={StorePage} />
                            <Route path="/login" component={LoginPage} />
                            <Route path="/search" component={SearchPage} />
                            <Route path="/categorySearch" />
                            <Route path="/locationSearch" />
                            <Route path="/roulette" />
                            <Route component={Intro} />
                        </Switch>
                    
                    <Footer />
                </Layout>
            </Background>
            </Router>
        </>
    );
}

const Background = styled.div`
    position: absolute;
    width: 100%;
    top: 0px;

    background-image: url("/static/Vectorvec.png"),
        url("/static/Vectorvec-1.png");

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

const Mainh3 = styled.h3`
    padding-top: 2rem;
    display: inline;
    z-index: 2;

    font-size: 1.5rem;
`;

export default App;
