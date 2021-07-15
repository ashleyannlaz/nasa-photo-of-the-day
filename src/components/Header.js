import React from 'react'
import '../App.css'
import styled from 'styled-components'
import logo from '../assets/nasa-logo-web-rgb-1.png'

const Links = styled.section`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    /* border: solid 1px black; */
`
const MainWrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: solid 1px #888888;
    padding: 1%;
`

const Logo = styled.img`
    /* border: solid 1px black; */
    width: 15vh;

`
Logo.defaultProps = {
    src: logo,
  };

export default function Header(props) {

    return (
        <MainWrapper>
        <Logo></Logo>
        <Links>
        <a href="index.html">HOME</a>
        <a href="index.html">Subscribe</a>
        <a href="index.html">SHOP</a>
        </Links>
        </MainWrapper>
    )
}