import projectList from "../assets/projectList";
import ProjectDetailView from "../components/ProjectDetailView";
import ProjectView from "../components/ProjectView";

const Projects = () => {
  return (
    <div className="flex flex-col items-center h-screen pt-24 light-dark-theme">
      <h1 className="text-3xl mt-7">My Projects</h1>
      <ProjectDetailView />
      <ProjectView projects={projectList} />
    </div>
  );
};

export default Projects;
