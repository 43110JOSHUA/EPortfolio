import ProjectEntry from "./ProjectEntry";

const ProjectList = () => {
  return (
    <>
      <h5 className="pb-2">My Projects</h5>
      <ul className="list-group">
        <li className="list-group-item d-flex flex-column gap-3 p-2">
          <ProjectEntry />

          <ProjectEntry />

          <ProjectEntry />

          <ProjectEntry />
        </li>
      </ul>
    </>
  );
};

export default ProjectList;
