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
  let subtitle;
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal(e) {
    setIsOpen(false);
    e.stopPropagation();
  }

  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <button onClick={closeModal}>Close</button>
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={image} alt="demo-img" />
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="mr-3 text-blue-600"
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
            className="text-blue-600"
          >
            demo
          </a>
        )}
      </Modal>
    </div>
  );
};

export default ProjectDetailView;
