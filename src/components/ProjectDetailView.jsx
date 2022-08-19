import Modal from "react-modal";

const ProjectDetailView = ({
  modalIsOpen,
  setIsOpen,
  title,
  description,
  image,
  github,
  demo,
  tags,
}) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      maxWidth: "68rem",
    },
    img: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "50%"
    }
  };

  function closeModal(e) {
    setIsOpen(false);
    e.stopPropagation();
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <button onClick={closeModal} className="w-full text-right" >Close</button>
        <h1 className="text-3xl text-center mb-5" >{title}</h1>
        <p className="mb-6" >{description}</p>
        <img src={image} alt="demo-img" className="w-[56rem] object-center" />
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="mr-3 text-blue-600 hover:underline"
        >
          github
        </a>

        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="text-blue-600 hover:underline"
          >
            demo
          </a>
        )}
      </Modal>
    </div>
  );
};

export default ProjectDetailView;
