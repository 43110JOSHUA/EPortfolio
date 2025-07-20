import ProjectEntry from "./ProjectEntry";

const ProjectList = () => {
  return (
    <>
      <h5 className="text-center pb-2">My Projects</h5>
      <ul className="list-group">
        <li className="list-group-item d-flex flex-column gap-3 p-3">
          <ProjectEntry
            title="Charity Code"
            year="2025"
            tools={[
              ["Next.js", "warning"],
              ["Node.js", "success"],
              ["FireBase", "danger"],
              ["Bootstrap", "info"],
            ]}
            onClick={() =>
              window.open(
                "https://github.com/43110JOSHUA/CharityCode",
                "_blank"
              )
            }
          >
            Some quick example text to build on the card title and make up the
            bulk of the card’s content. Some quick example text to build on the
            card title and make up the bulk of the card’s content. Some quick
            example text to build on the card title and make up the bulk of the
            card’s content.
          </ProjectEntry>
          <ProjectEntry
            title="Portfolio Website"
            year="2025"
            tools={[
              ["React.js", "warning"],
              ["Node.js", "success"],
              ["Bootstrap", "info"],
            ]}
            onClick={() =>
              window.open("https://github.com/43110JOSHUA/EPortfolio", "_blank")
            }
          >
            Some quick example text to build on the card title and make up the
            bulk of the card’s content. Some quick example text to build on the
            card title and make up the bulk of the card’s content. Some quick
            example text to build on the card title and make up the bulk of the
            card’s content.
          </ProjectEntry>
          <ProjectEntry
            title="Class Tracker"
            year="2025"
            tools={[
              ["Python", "success"],
              ["SQLite", "primary"],
            ]}
            onClick={() =>
              window.open(
                "https://github.com/43110JOSHUA/ClassTracker",
                "_blank"
              )
            }
          >
            Some quick example text to build on the card title and make up the
            bulk of the card’s content. Some quick example text to build on the
            card title and make up the bulk of the card’s content. Some quick
            example text to build on the card title and make up the bulk of the
            card’s content.
          </ProjectEntry>
          <ProjectEntry
            title="Taipei MRT"
            year="2023"
            tools={[
              ["Roblox", "primary"],
              ["Lua", "info"],
              ["Blender3D", "warning"],
            ]}
            onClick={() =>
              window.open(
                "https://www.roblox.com/games/14059422828/Taipei-MRT",
                "_blank"
              )
            }
          >
            Some quick example text to build on the card title and make up the
            bulk of the card’s content. Some quick example text to build on the
            card title and make up the bulk of the card’s content. Some quick
            example text to build on the card title and make up the bulk of the
            card’s content.
          </ProjectEntry>
        </li>
      </ul>
    </>
  );
};

export default ProjectList;
