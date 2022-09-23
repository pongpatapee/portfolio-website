import PongpatapeeResume from "../assets/PongpatapeeResume.pdf";

const ResumeViewer = () => {

  return (
    <div className="resume-viewer flex flex-col justify-center items-center 
                    w-full h-full">
      <a
        href={PongpatapeeResume}
        download
        className="download-btn mb-4 text-xl"
      >
        Download Resume
      </a>

      <object
        data={PongpatapeeResume}
        width="35%"
        height="80%"
      >
        My PDF resume
      </object>

    </div>
  );
};

export default ResumeViewer;
