import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Success from './Pages/Success/Success';
import AdminPortal from './Pages/Adminportal';
import Menu from './components/Menu';
import Team from './components/Team';
import WhoAreWe from './components/WhoAreWe';
import './App.css'
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/success' element={<Success/>}/>
          <Route path='/admin' element={<AdminPortal/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/whoarewe' element={<WhoAreWe/>}/>
        </Routes>
        <Toaster/>
      </Router>
    </>
  )
}

export default App
