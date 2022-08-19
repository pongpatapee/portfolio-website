import { useState } from "react";
import ProjectItem from "./ProjectItem";

const ProjectView = ({ projects }) => {
  const itemsPerPage = 6;
  let numPages = Math.ceil(projects.length / itemsPerPage);
  const [page, setPage] = useState(1);
  const [index, setIndex] = useState(0);

  const handleNextPage = () => {
    setIndex(index + itemsPerPage);
    setPage(page + 1);
  }

  const handlePrevPage = () => {
    setIndex(index - itemsPerPage);
    setPage(page - 1);
  }

  return (
    <div className="flex flex-wrap w-full max-w-7xl">
      {projects.slice(index, index + itemsPerPage).map(project => {
        const { id, title, description, image, links, tags } = project
        const {github, demo} = links
        return (<ProjectItem key={id} title={title} description={description} image={image} github={github} demo={demo} tags={tags} />);
      })}

      <div className="flex w-full">
        {page === 1 ? null : <button onClick={handlePrevPage}>previous</button>}
        <p className="mx-10">page {page} of {numPages}</p>
        {page === numPages ? null : <button onClick={handleNextPage}>next</button>}
      </div>
      
    </div>
  );
};

export default ProjectView;
