import {projectFirestore, projectAuth} from '../firebase/config'

// Login authentication
export const login = (email, password) =>{
    return projectAuth.signInWithEmailAndPassword(email,password)
}

// Logout of the authntication
export const logout = () =>{
    return projectAuth.signOut()
}

// Register the user
export const register = async (email, password) =>{
    await projectAuth.createUserWithEmailAndPassword(email, password)
    
}

// Function to get additional data of a user when registering
export const addUserDetails = (firstName, lastName) =>{
    if(!projectAuth.currentUser){
        alert("Not Authorized")
    }
    return projectFirestore.doc(`users/${projectAuth.currentUser.uid}`).set({
        firstName:firstName,
        lastName:lastName,
        intials:firstName[0]+lastName[0]
    })
}

// Set the fetching of data from firebase when firebase is initialize
export const isInitialized = () =>{
    return new Promise(resolve =>{
        projectAuth.onAuthStateChanged(resolve)
    })
}

// Get the current logged in user
export const getCurrentUser = () =>{
    return projectAuth.currentUser &&  projectAuth.currentUser.uid
}
export const getInitials = async () =>{
    const initials =projectAuth.currentUser  && await projectFirestore.doc(`users/${projectAuth.currentUser.uid}`).get()
    return projectAuth.currentUser &&  initials.get("intials")
}

export const getUserDetails = async () =>{
    const firstName =projectAuth.currentUser  && await projectFirestore.doc(`users/${projectAuth.currentUser.uid}`).get()
    return projectAuth.currentUser &&  firstName.get("firstName")
}