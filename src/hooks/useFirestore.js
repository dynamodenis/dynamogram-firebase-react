import {useEffect, useState } from'react'
import {projectFirestore} from '../firebase/config'
import { getCurrentUser } from './useAuth'


const useFirestore = (collection) => {

    const [docs,setDocs] = useState([])

    useEffect(() => {
        // Get the collection passed in above.
        const unsub= projectFirestore.collection(collection)
            // oredr the collection wth time in descending order
            .orderBy('createdAt','desc')
            // Get the snapshot of new data in the collection as snapshot
            .onSnapshot((snap)=>{
                let documents = [];
                snap.forEach(doc => {
                    // Return the only data by the current user
                    if(getCurrentUser() === doc.data().uid){
                        documents.push({...doc.data(), id:doc.id})
                   }
                    
                });
            // Add the documents to the docs
            setDocs(documents)
            })
        // clean up the function when component is not used
        return () => unsub()
    }, [collection])

    return {docs}

}

export default useFirestore