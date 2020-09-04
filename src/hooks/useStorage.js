import React,{useState,useEffect, Fragment} from 'react'
import { projectStorage, projectFirestore, timeStamp } from '../firebase/config'
import { getCurrentUser, getUserDetails } from './useAuth'


function useStorage(file) {
    // set the state of the file
    const [progress, setProgress] = useState(0)
    const [error, setError ]= useState(null)
    const [url,setUrl ] = useState(null)

    

    useEffect(()=>{
        // refernce the file name in the storage
        const storageRef = projectStorage.ref(file.name)
        const collectionRef = projectFirestore.collection('images')
        const currentUser = getCurrentUser()
        const firstName = getUserDetails()

        // Event handler on(state_changed) successful,progress
        storageRef.put(file).on('state_changed',(snap) =>{
            // perentage of the progress
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage)
        }, (err) => {
            // incase of an error
            setError(err)
        }, async () =>{
            // make async request to get the url of the image
            const url =await storageRef.getDownloadURL()
            const createdAt = timeStamp()
            const uid = currentUser

            collectionRef.add({url:url, createdAt,uid})
            setUrl(url)
        });

    },[file])

    return { progress, url, error}
}

export default useStorage
