import React, { useState } from "react";

//Import Worker
import { Worker } from "@react-pdf-viewer/core";
// Import the main Viewer component
import { Viewer } from "@react-pdf-viewer/core";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
// default layout plugin
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// Import styles of default layout plugin
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

function UploadFile() {
  //creating new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  //pdf file onchange state
  const [pdfFile, setPdfFile] = useState(null);

  //pdf file error state
  const [pdfError, setPdfError] = useState("");

//handle file onchange event
  const allowedFiles = ["application/pdf"];

  const handleFileInputChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && allowedFiles.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          setPdfError("");
          setPdfFile(e.target.result);
        };
      } else {
        setPdfError("Not a valid pdf: Please select only PDF");
        setPdfFile("");
      }
    } else {
      console.log("please select a PDF");
    }
  };
  return (
    <div>
      <input
        type="file"
        //className="form-control"
        onChange={handleFileInputChange}
      />
      {pdfError && <span className="text-danger">{pdfError}</span>}

      <h4>View PDF</h4>
      <div className="viewer">
        {/* render this if we have a pdf file */}
        {pdfFile && (
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
            <Viewer
              fileUrl={pdfFile}
              plugins={[defaultLayoutPluginInstance]}
            />
          </Worker>
        )}

        {/* render this if we have pdfFile state null   */}
        {!pdfFile && <>No file is selected yet</>}
      </div>
    </div>
  );
}

export default UploadFile;
