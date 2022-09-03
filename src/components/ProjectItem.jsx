import { useState } from "react";
import ProjectDetailView from "./ProjectDetailView";

const ProjectItem = ({ title, description, image, github, demo, tags }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div
      className="w-96 h-[18rem] m-5 p-3 border-4 light-dark-border 
                hover:scale-110 transition-transform duration-200 
                cursor-pointer flex flex-col justify-between
                "
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
      <img src={image} alt="demo-img" className="h-auto max-w-full overflow-hidden object-cover"/>
      {/* <div className="flex justify-center flex-grow basis-0 border-4">
        <img src={image} alt="demo-img" className="max-h-full"/>
      </div> */}
      <div>
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
      </div>
    </div>
  );
};

export default ProjectItem;
