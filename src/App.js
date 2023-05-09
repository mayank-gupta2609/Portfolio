import React from 'react'
import {  Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './components/Home';
import News from './components/NewsApp/News';

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="NewsApp" element={<News/>} />

      </Routes>
    </>
  )
}

export default App
