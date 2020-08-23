import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const AuthWrap = ({title, children}) => {
    return <>
    <Layout>
    <TitleWrapper>
        <Title>
        {title}
        </Title>
    </TitleWrapper>
 
       <Content>
        {children}
       </Content>
    </Layout>
    
    </>
}

const Layout = styled.div`
    margin-top: 2rem;
    background: #ffffffbb;
    width: 500px;
    margin-left: 300px;
    user-select: none;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);

`;

const TitleWrapper = styled.div`
    background : ${oc.blue[3]};
    height: 5rem;
    display: flex;
    align-items: center;
    
    justify-content: center;
`;

const Title = styled.div`
    font-family: 'Russo One' , sans-serif;
    font-size: 1.6rem;
    color: white;
`;  

const Content  = styled.div`
    background: white;
    padding: 2rem;
`;


export default AuthWrap;