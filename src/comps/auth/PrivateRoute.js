import React from 'react'
import {Route,Redirect } from 'react-router-dom'
import { getCurrentUser } from '../../hooks/useAuth'


const PrivateRoute = ({component:Component,...rest}) =>(
    <Route
    {...rest}
    render={props=>{
        if(!getCurrentUser()){
            return <Redirect to="/login"></Redirect>
        } else{
            return <Component {...props}/>
        }
    }}
    />
)
    


export default PrivateRoute