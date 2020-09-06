import React, { Fragment, useState } from 'react'
import {Link, withRouter, Redirect} from 'react-router-dom'
import Title from '../Navbar/Title'
import { register, addUserDetails, getCurrentUser, signInWithGoogle} from '../../hooks/useAuth'


function SignUp(props) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [error, setError ] = useState(null)

    // onChange on the value of the input
    const onChange= e =>{
        const {name , value} = e.currentTarget
        if(name === 'email'){
            setEmail(value)
        } else if(name === 'password'){
            setPassword(value)
        } else if (name==="firstName"){
            setFirstName(value)
        } else if (name === "lastName"){
            setLastName(value)
        }
    }

    // Submt the login details

    const onSubmit = async (e) =>{
        e.preventDefault()
    
        try{
            await register(email,password)
            await addUserDetails(firstName, lastName)
            props.history.replace('/')

            
        }catch(error){
            setError(error.message)

        }
    }

    return (
        <Fragment>
            <Title/>
            <div className="container">
                    <h4 className="center mr-4">Register</h4>
                    <form className="white" onSubmit={onSubmit}>
                    <div className="input-field ">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" name="firstName" className="form-control"  value={firstName} onChange={onChange}/>
                        </div>
                        <div className="input-field ">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" name="lastName" className="form-control" value={lastName} onChange={onChange}/>
                        </div>
                        <div className="input-field ">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" className="form-control"  value={email} onChange={onChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" className="form-control"  value={password}  onChange={onChange}/>
                        </div>
                        <div className="input-field">
                            <button type="submit" className="btn pink lighten-1 z-depth-0">Register</button>
                            <div className="red-text center">
                            { error ? <p>{error} </p>: null}
                            </div>
                        </div>
                        <p className="text-muted text-small">Already have an account? <Link to="/login">Login</Link></p>
                    </form>
        
                </div>
            </Fragment>
    )
}

export default withRouter(SignUp)
