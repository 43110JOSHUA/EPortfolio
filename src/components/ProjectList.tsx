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
            A web platform connecting organizations and idea posters with
            aspiring developers. Built to help individuals and groups post
            software ideas they want implemented, allowing students and
            freelance coders to submit GitHub repo links under each project for
            experience and visibility. Includes email-based account creation for
            posters, public project listings, and submission tracking with email
            confirmations.
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
            My portfolio website built using React, Node, and Bootstrap.
            Features a lightweight backend for handling secure API requests for
            displaying live statistics of my brokerage account performance.
            Deployed with Azure.
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
            A simple Python + SQLite3 program for storing and analyzing
            information about your friends or classmates using a local database.
            Users can add, edit, and delete entries, as well as search for
            specific individuals and calculate simple statistics.
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
            A Recreation of the Taipei MRT system on Roblox. Amassed over 25,000
            visits and maintains an average of 30+ active players daily.
          </ProjectEntry>
        </li>
      </ul>
    </>
  );
};

export default ProjectList;
