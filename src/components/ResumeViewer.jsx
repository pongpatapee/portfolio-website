import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { useState } from "react";

const ResumeViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <div className="resume-viewer flex flex-col justify-center items-center">
      <a href="./PongpatapeeResume.pdf" download
          className="download-btn mb-4 text-xl">
        Download Resume
      </a>
      <Document file="./PongpatapeeResume.pdf" 
                onLoadSuccess={onDocumentLoadSuccess} 
                onLoadError={console.error}>
        <Page pageNumber={pageNumber} width="1000" className="border-2 border-black" />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};
 
export default ResumeViewer;