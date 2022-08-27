import projectList from "../assets/projectList";
import ProjectView from "../components/ProjectView";

const Projects = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl">My Projects</h1>
      <ProjectView projects={projectList} />
    </div>
  );
};

export default Projects;
