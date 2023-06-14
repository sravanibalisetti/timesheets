import React from 'react'
import './App.css';
import Menu from './components/Menu';
import Main from './components/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' Component={Menu} />
        <Route path='/Main' Component={Main} values/>
      </Routes>



    </>
  )

}

export default App