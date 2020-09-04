import React,{Fragment, useState} from 'react'
import Title from '../Navbar/Title'
import UploadForm from '../UploadForm'
import ImageGrid from '../ImageGrid'
import Modal from '../Modal'



function Dashboard() {
    // Get the state of the image to pass it in the modal
    const [selectedImg, setSelectedImg] = useState(null)

    return (
        <Fragment>
            <Title/>
            <div className="title">
                <h2>Your Pictures</h2>
                <p>Welcome to DynamoGram, create you own photo album.</p>
            </div>
            <UploadForm/>
            <ImageGrid setSelectedImg={setSelectedImg}/>
            {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
        </Fragment>
    )
}

export default Dashboard
