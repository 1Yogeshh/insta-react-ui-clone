import React from 'react';
import{Routes, BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Profile from './components/Profile';
import Setting from './components/Log';


const App=()=> {
  return (
    <>
    <Router>
    
      <Routes>
      
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/setting' element={<Setting/>}/>

      </Routes>
    </Router>

    </>
  )
}

export default App;


