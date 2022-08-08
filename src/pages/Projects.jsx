import projectList from "../assets/projectList";
import ProjectView from "../components/ProjectView";

const Projects = () => {
  return (
    <div className="flex flex-col items-center h-screen pt-24 light-dark-bg">
      <h1 className="text-3xl mt-7">My Projects</h1>
      <ProjectView projects={projectList} />
    </div>
  );
};

export default Projects;
