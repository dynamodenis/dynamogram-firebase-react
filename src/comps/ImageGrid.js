import React,{useState, useEffect} from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import { getCurrentUser,getInitials,getUserDetails } from '../hooks/useAuth';
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');



  return (
    <div className="img-grid">
      {docs && docs.map(doc => (
        <motion.div className="img-wrap" key={doc.id} 
          layout
          whileHover={{ opacity: 1 }}
          onClick={() => setSelectedImg(doc.url)}
        >
          <motion.img src={doc.url} alt="uploaded pic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
        </motion.div>
      ))}
 
    </div>
  )

}
export default ImageGrid;
