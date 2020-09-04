import React,{ useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'


import Title from './comps/Navbar/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import useFirestore from './hooks/useFirestore';
import Dashboard from './comps/layout/Dashboard';
import SignIn from './comps/auth/SignIn';
import SignUp from './comps/auth/SignUp';
import {isInitialized } from './hooks/useAuth'
import PrivateRoute from './comps/auth/PrivateRoute';

function App() {

  //  Check if firebase is loaded or still loading
  const[firebaseInitialized, setFirebaseInitialized]= useState(false)

  // change the value of firebase intialized by using useEffect
  useEffect(()=>{
    isInitialized().then(val => {
      setFirebaseInitialized(val)
    })
  })

  return firebaseInitialized !== false ? (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard}/>
          <Route exact path="/login" component={SignIn}/>
          <Route exact path = "/register" component={SignUp} />
        </Switch>
      </div>
    </BrowserRouter>
    // if the firebase is still waiting for data use a loader
  ) : <div className="loader">
          <div className="preloader-wrapper big active center">
            <div className="spinner-layer spinner-blue">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>

            <div className="spinner-layer spinner-red">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>

            <div className="spinner-layer spinner-yellow">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>

            <div className="spinner-layer spinner-green">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
      </div>
}

export default App;
