import React, { useState } from 'react';
import GetArchivo from './components/getArchivo';
import { fetchLambdaS3, fetchLambdaS3End } from './services/uploadFile'
import { fetchLambdaTextract } from './services/textractFile';
import Navigation from './components/navigation';
import GetReportes from './components/getReportes';
import { Audit } from './services/audit'

import {BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import './App.css';
import { Signin } from './components/signin';
import { Signup } from './components/signup';


const Router = ()=> {
  const [Response, setReponse] = useState({})

  const getFile64 = async (file64, file) => {
    const data = { }
    try {
      const data = await fetchLambdaS3(file)
      await fetchLambdaS3End(data.uploadURL,file64,file.type)
      await fetchLambdaTextract(file.name)
      const user = JSON.parse( localStorage.getItem('user'))
      await Audit(user.email,user.password,'GetArchivo')
      
      data.error = true
      data.className = 'alert success'
      data.message = 'Sea guardado Correctamente'
      setReponse(data)

    } catch (error) {
      data.error = false
      data.className = 'alert danger'
      data.message = error.message
      setReponse(data)
    }
  }

  return (
    <Switch>
      <Route exact path="/">
        <Navigation/>
        <Signin />
      </Route>
      <Route exact path="/signup">
        <Navigation/>
          <Signup />
      </Route>
      <MyRoute exact path="/upload-file">
        <Navigation/>
        <GetArchivo callback={getFile64} reponse={Response} />
      </MyRoute>
      <MyRoute exact path="/report">
        <Navigation/>
        <GetReportes />
      </MyRoute>
    </Switch>
  )
}

const MyRoute = (props) => (
  isAuthentication()
  ? <Route {...props} />
  : <Redirect to="/"/>
)

const isAuthentication = () => {
  const token =  localStorage.getItem('token')
  if (token) {
    return true
  }else{
    return false
  }
}

function App() {
  
  return (
 
      <BrowserRouter>
          <Router/>    
      </BrowserRouter>

  );
}

export default App;
