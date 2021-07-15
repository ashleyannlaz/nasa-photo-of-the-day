import React from "react";
import "./App.css";
import Header from './components/Header'
import Photo from './components/Photo'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCalendar } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCalendar)

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
`

function App() {

  return (
<div className="App">
    <Header />
    <Wrapper>
    <Photo />
    </Wrapper>
    <div> 
    </div>
</div>

  );
}

export default App;
