import React, {useState} from "react";
import Axios from "axios";


function UploadFile() {
    Axios.defaults.withCredentials = true;
     const [pdfFile, setPdfFile] = useState('');
     const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPdfFile(reader.result);
        }
     }

    //  const handleSubmitFile = (e) => {
    //     e.preventDefault();
    //     if(!previewSource) return;
    //     Axios.put(`api url`, {data: pdfFile}); 
    //  }
    console.log(pdfFile);
    return (
        <div>
            
            <input
                type="file"
                onChange={handleFileInputChange}
                />
        </div>
    );
}

export default UploadFile;