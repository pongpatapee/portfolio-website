import { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import PongpatapeeResume from "../assets/PongpatapeeResume.pdf";
import useWindowSize from "../hooks/useWindowSize";

const ResumeViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const windowSize = useWindowSize();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <div className="resume-viewer flex flex-col justify-center items-center">
      <a
        href={PongpatapeeResume}
        download
        className="download-btn mb-4 text-xl"
      >
        Download Resume
      </a>
      <Document
        file={PongpatapeeResume}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={console.error}
      >
        <Page
          pageNumber={pageNumber}
          width={Math.floor(windowSize.width * 0.55)}
          // style={{ borderWidth: "2px"}}
          className="border-2 light-dark-border"
        />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};

export default ResumeViewer;
