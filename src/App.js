import React from 'react'
import {  Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './components/Home';
import News from './components/NewsApp/News';
import YouTube from './components/YouTube/YouTube';

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="NewsApp" element={<News/>} />
        <Route exact path="YouTube" element={<YouTube/>} />
      </Routes>
    </>
  )
}

export default App
