import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import Header from './components/Header'
import Photo from './components/Photo'
import Social from './components/Social'

function App() {

  const [pic, setPic] = useState([])

  // useEffect(() => {
  //   axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2021-07-12`)
  //     .then(res => {
  //       setPic(res.data)
  //     })
  //     .catch(err => console.log(err))
  //     //we would need to reload to see new data, not new
  // }, [])
  
  return (
    <div className="App">
      <div>
      <Header />
      </div>
      <div className='PicDiv'>
      <Photo pic={pic} />
      <Social /> 
      </div>
    </div>

  );

  


}

export default App;
