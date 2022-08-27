import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { useEffect } from 'react';
import { storage } from './firebase';
import { ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';



const fileTypes = ["JPG", "PNG", "GIF","CSV"];

function Dropdown() {
    const [filename,setfilename]=useState("file1");

  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
    
  };
  const onnchange = (e) => {
    setfilename(e.target.value);
    
  };
  const uploadimage=()=>{
    if(file==null) return;
    const imageref=ref(storage,`images/${filename}`);
    uploadBytes(imageref,file).then((response)=>{
      alert("image uploaded");
      
    })
}

  return (
    <div>
    <FileUploader handleChange={handleChange} name="file" types={fileTypes} />

    <input onChange={onnchange}/>
    <button onClick={uploadimage}>submit</button>
    </div>
  );
  
}

export default Dropdown;


