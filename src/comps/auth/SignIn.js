import React, { Fragment,useState } from 'react'
import {Link, withRouter, Redirect} from 'react-router-dom'
import Title from '../Navbar/Title'
import { login, logout, getCurrentUser} from '../../hooks/useAuth'

function SignIn(props) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('')
    const [error, setError ] = useState(null)

    // onChange on the value of the input
    const onChange= e =>{
        const {name , value} = e.currentTarget
        if(name === 'email'){
            setEmail(value)
        } else if(name === 'password'){
            setPassword(value)
        }
    }

    // Submt the login details

    const onSubmit = async (e) =>{
        e.preventDefault()
        
        try{
            await login(email, password)
            props.history.replace("/")
        }catch(error){
            setError(error.message)
        }

        
    }

    // if(!getCurrentUser()){
    //     console.log("User is unauthenticated!")
    //     props.history.replace("/login")
    //     return null
    //   }
    return (
        
        <Fragment>
        <Title/>
        <div className="container">
            <h4 className="center mr-4">Welcome Back</h4>
            <form className="white" onSubmit={onSubmit}>
                <div className="input-field ">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" className="form-control" value={email} onChange={onChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" className="form-control"  value={password} onChange={onChange}/>
                </div>
                <div className="input-field">
                    <button type="submit" className="btn pink lighten-1 z-depth-0">Login</button>
                    <div className="red-text center">
                    { error ? <p>{ error } </p>: null}
                    </div>
                </div>
                <p className="text-muted text-small">Don't  have an account? <Link to="/register">Register</Link></p>
            </form>
        </div>
        </Fragment>
    )
}

export default withRouter(SignIn) 
