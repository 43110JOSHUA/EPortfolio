import ProjectEntry from "./ProjectEntry";

const ProjectList = () => {
  return (
    <>
      <h5 className="pb-2">My Projects</h5>
      <ul className="list-group">
        <li className="list-group-item">
          <ProjectEntry />
        </li>
        <li className="list-group-item">
          <ProjectEntry />
        </li>
        <li className="list-group-item">
          <ProjectEntry />
        </li>
        <li className="list-group-item">
          <ProjectEntry />
        </li>
      </ul>
    </>
  );
};

export default ProjectList;
