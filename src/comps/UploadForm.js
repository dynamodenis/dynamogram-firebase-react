import React,{Fragment, useState} from 'react'
import ProgressBar from './ProgressBar'

function UploadForm() {

    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)
    // declare the allowed image files
    const types = ['image/png', 'image/jpeg', 'image/jpg']

    const changePhoto = e =>{
        let selected = e.target.files[0]
        // set the file to state if its selected
        if(selected && types.includes(selected.type)){
            setFile(selected)
            setError('')
        }else{
            setFile(null)
            setError('Invalid file! Select only png or jpg or jpeg images')
        }

    }
    return (
        <Fragment>
            <form>
                <label className="image-label">
                    <input type="file" className="img-input" onChange={changePhoto} className="image-input"/>
                    <span>+</span>
                </label>
                <div className="ouput">
                    {error && <div className="error">{error}</div>}
                    {file && <div>{file.name}</div>}
                    {file && <ProgressBar file={file} setFile={setFile}/>}
                </div>
            </form>
        </Fragment>
    )
}

export default UploadForm
