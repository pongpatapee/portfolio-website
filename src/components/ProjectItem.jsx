const ProjectItem = ({ title, description, image, github, demo, tags }) => {
  return (
    <div className="w-96 m-5 p-3 border-4 border-black hover:scale-110 duration-200">
      <h1 className="text-2xl font-bold text-center">{title}</h1>
      <p>{description}</p>
      <img src={image} alt="demo-img" />
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="mr-3 text-blue-600"
      >
        github
      </a>
      <a
        href={demo}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600"
      >
        demo
      </a>
    </div>
  );
};

export default ProjectItem;
