import { useState } from "react";
import ProjectDetailView from "./ProjectDetailView";

const ProjectItem = ({ title, description, image, github, demo, tags }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div
      className="w-96 m-5 p-3 border-4 border-black 
                    hover:scale-110 duration-200 cursor-pointer"
      onClick={openModal}
    >
      <ProjectDetailView
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        title={title}
        description={description}
        image={image}
        github={github}
        demo={demo}
      />
      <h1 className="text-2xl font-bold text-center">{title}</h1>
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
    </div>
  );
};

export default ProjectItem;
