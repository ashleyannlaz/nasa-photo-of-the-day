import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Photo.css'

const Photo = props => {
    const [pic, setPic] = useState([])

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2021-07-12`)
          .then(res => {
            console.log(res.data)
            setPic(res.data)
          })
          .catch(err => console.log(err))
          //we would need to reload to see new data, not new
      }, [])

    return (
        <div>
            <h1>Pic of the Day</h1>
            <img src={pic.url} alt={pic.title}/>
            <p>{pic.date}</p>
            <p>{pic.title}</p>
            <p>{pic.explanation}</p>
            <p>Photograph Taken By: {pic.copyright} </p>
        </div>
    )
}

export default Photo;