import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css'
import ReactPlayer from "react-player";


export default function Content({url})
{
    {url.includes('youtube')?<div className ='player-wrapper'><ReactPlayer url={url} /></div>:<Pic pic={url}/>}
};
