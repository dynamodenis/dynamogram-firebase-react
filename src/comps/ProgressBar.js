import React,{useEffect} from 'react'
import useStorage from '../hooks/useStorage'
import { motion } from 'framer-motion'

function ProgressBar({file, setFile}) {
    // retrieve the progress and files in the useStorage()
    const {progress, url} = useStorage(file)

    // set the progress to null by setting the  setFile to null to remove the bar after u have a full upload
    useEffect(() => {
        if(url){
            setFile(null)
        }
    },[url, setFile])
    console.log(progress,url)
    return (
        <motion.div className="progress-bar" initial={{width: 0}} animate={{width:progress + "%"}}>
        </motion.div>
    )
}

export default ProgressBar
