import React, { useEffect, useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { logout, getInitials, getCurrentUser } from '../../hooks/useAuth';



const Title = (props) => {

  // Get the logged in user initals
  const [initials, setInitals] = useState('')



  useEffect(()=>{
    getInitials().then(val =>{
      setInitals(val)
    })
  })

  

  const logoutUser = async () =>{
    await logout()
    props.history.push("/login")
  }


  const links = getCurrentUser() ? 
  <ul id="nav-mobile" className="right">
    <li><NavLink to="/" className="btn btn-floating pink lighten-1">{initials ? initials: null}</NavLink></li>
    <li><a onClick={logoutUser}>Sign Out</a></li>
  </ul>
   :<ul id="nav-mobile" className="right">
      <li><NavLink to="/login">Login</NavLink></li>
      <li><NavLink to="/register">SignUp</NavLink></li>
    </ul>

  return (
    <div className="title">
      <nav className="nav-wrapper">
        <NavLink to="/" className="brand-logo left">DynamoGram</NavLink>
        {links}
      </nav>
    </div>
  )
}

export default withRouter(Title);