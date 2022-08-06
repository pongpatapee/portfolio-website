import ProjectItem from "./ProjectItem";

const ProjectView = ({ projects }) => {
  return (
    <div className="flex flex-wrap w-full max-w-7xl">
      {projects.map(project => {
        const { id, title, description, image, links, tags } = project
        const {github, demo} = links
        return (<ProjectItem key={id} title={title} description={description} image={image} github={github} demo={demo} tags={tags} />);
      })}
    </div>
  );
};

export default ProjectView;
