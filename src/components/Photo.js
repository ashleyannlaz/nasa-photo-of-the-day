import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css'
import styled from 'styled-components'
import Social from './Social'
import dateFormat from "dateformat";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


// import Date from './Date'

const MainWrapper = styled.section`
  margin: 3% 3% 3% 3%;
  border: solid 0px black;
  padding: 1%;
`
const Container= styled.section`
  display: flex;
`
const TitleWrapper= styled.section`
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px #F0F0F0;
  margin-bottom: 10px;

`
const DateWrapper= styled.section`
  
`
const Title= styled.h1`
  /* font-family: Montserrat, sans-serif; */
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 36px;
  margin: 0% 0% 1% 0%;
  text-align: justify;

`

const Description= styled.section`
  margin: 0% 3% 0% 3%;
  display:flex;
  flex-direction: column;
  text-align: justify;
  
`


const Para=styled.p`
  /* font-family: Arial, Helvetica, sans-serif; */
  letter-spacing: 1.5px;
  margin-top: 1%;

  ${props => (props.type === 'title' ? ` text-transform: uppercase; font-size: 24px; margin-bottom: 2%; font-weight: bold; letter-spacing: 4px; color: #101010; ` : null)}
  ${props => (props.type === 'date' ? ` color:	#808080;  ` : null)}
  ${props => (props.type === 'desc' ? ` margin-bottom: 1%; font-size:14px; line-height:1.25;color: #101010;  ` : null)}
  ${props => (props.type === 'copyright' ? ` text-transform: uppercase; color:#C8C8C8; font-weight:bold; letter-spacing: 4px; font-size: 16px; ` : null)}
`

const Photo = props => {
    const [pic, setPic] = useState([])
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [url, setURL] = useState("")
    let formatDate = dateFormat(selectedDate,'yyyy-mm-dd')

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=YwMNslJ8c9CTZb4xliGPAsjiLvPoJfqHzbhqkeWg&date=${formatDate}`)
          .then(res => {
            console.log(res.data)
            setPic(res.data)
            setURL(res.data.url)
          })
          .catch(err => console.log(err))
          //we would need to reload to see new data, not new
      }, [formatDate])

      

    return (
        <MainWrapper>
            <TitleWrapper>
            <Title>Photo of the Day</Title>
            <DateWrapper>
              <FontAwesomeIcon icon="calendar" />
                  <DatePicker 
                        selected={selectedDate} 
                        onChange={date => setSelectedDate(date)} 
                        dateFormat="MM/dd/yyyy"
                        maxDate={new Date()}
                        className="datepicker"

      />
            </DateWrapper>  
            </TitleWrapper>
            
            <Container>
            {/* <img className="imof" src={pic.url} alt={pic.title}/> */}
            {url.includes('youtube','embed')?<div><ReactPlayer url={url} /></div>:<img className="imof" src={url} alt={pic.title} />}
            <Description>

            <Para type="title"> {pic.title}</Para>
            <Para type="desc">{pic.explanation}</Para>
            <Para type="copyright">
              {url.includes('youtube')? (`VIDEO BY NASA © ${pic.title}`):(`Photograph Taken By: ©${pic.copyright}`)}               
            </Para>
            <Social />
            </Description>
            </Container>
        </MainWrapper>
    )
}

export default Photo;



      // {url.includes('youtube')?<div className ='player-wrapper'><ReactPlayer url={url} /></div>:<Pic pic={url}/>}
      // <Content hdpic ={contents.hdurl} explanation={contents.explanation} url={url}/>
      // {contents.copyright === undefined?null:<Footer copyright={contents.copyright}/>}
