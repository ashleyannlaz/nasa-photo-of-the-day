import React from 'react'
import {
    EmailShareButton,
    FacebookShareButton,
    TwitterShareButton,
  } from "react-share";

  import {
    EmailIcon,
    FacebookIcon,
    TwitterIcon,
  } from "react-share";

  import styled from 'styled-components'

  const Shares = styled.section`
  display: flex;
  margin: 5% 5% 2% 0%;
  width: 100%;
  /* justify-content: space-evenly; */
  align-items: center;
  border-bottom: solid 1px #F0F0F0;
  `

const Icons = styled.section`
display: flex;
margin: 5% 5% 2% 0%;
width: 100%;
justify-content: space-evenly;
align-items: center;
`


const Para=styled.p`
  letter-spacing: 1.5px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  `
 const Box=styled.section`
 padding: 2px;
 border: solid 1px black;
 width: 150px;
 letter-spacing: 3px;
 display: flex;
 font-size: 12px;
 align-items: center;
 justify-content: center;
 ` 

const Social = props => {

    return (
        <div><Shares> 
            <Para>Share today's photo: </Para>
            </Shares>
            <Icons>
        <Box> EMAIL 
            <EmailShareButton url={window.location.href}>
            <EmailIcon size={25} round={false} iconFillColor="black" bgStyle={{ fill: 'none' }}  /> 
            </EmailShareButton>
        </Box>
        <Box> SHARE
            <FacebookShareButton url={window.location.href}>
            <FacebookIcon size={25} round={false} iconFillColor="black" bgStyle={{ fill: 'none' }}   />
            </FacebookShareButton>  
        </Box>
        <Box> TWEET
            <TwitterShareButton url={window.location.href}>
            <TwitterIcon size={25} round={false} iconFillColor="black" bgStyle={{ fill: 'none' }}    />
            </TwitterShareButton>
        </Box>

             </Icons>
            </div>

    )
}

export default Social;