import Login from './page/Login/Login'

import Home from './page/Home/Home'

import Project from './page/Project/Project'

import Activity from './page/Activity/Activity'

import NavigationBar from './component/NavigationBar/NavigationBar'

import User from './page/User/User'

import React from 'react';
import Group from './page/Group/Group'

import {Route, BrowserRouter, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar/>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/login' element = {<Login/>}/>
        <Route path = '/project' element = {<Project/>}/>
        <Route path = '/activity' element = {<Activity/>}/>
        <Route path = '/user' element = {<User/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
//<Route path = '/group' element = {<Group/>}/>