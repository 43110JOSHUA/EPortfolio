import ProjectEntry from "./ProjectEntry";

const ProjectList = () => {
  return (
    <>
      <h5 className="text-center pb-2">My Projects</h5>
      <ul className="list-group">
        <li className="list-group-item d-flex flex-column gap-3 p-3">
          <ProjectEntry
            title="Shield Message"
            year="2025"
            tools={[
              ["Next.js", "nextjs"],
              ["PostgreSQL", "postgre"],
              ["Firebase", "warning"],
              ["ZeroBounce", "zerob"],
              ["Resend", "nextjs"],
              ["Twilio", "danger"],
              ["Stripe", "stripe"],
              ["Bootstrap", "bootstrap"],
              ["Azure", "primary"],
            ]}
            onClick={() => window.open("https://shieldmessage.com", "_blank")}
          >
            A SaaS platform providing users with a digital deadman's switch that
            automatically delivers their failsafe messages to designated
            recipients when users fail to check in within a specified timeframe.
            Users can create messages with custom check-in intervals to be sent
            via email or SMS. The platform validates recipient emails in
            real-time and offers both free and premium subscription tiers with
            enhanced features like multimedia messaging and priority delivery.
          </ProjectEntry>
          <ProjectEntry
            title="Charity Coder"
            year="2025"
            tools={[
              ["Next.js", "nextjs"],
              ["FireBase", "warning"],
              ["Bootstrap", "bootstrap"],
              ["Azure", "primary"],
            ]}
            onClick={() => window.open("https://charitycoder.com/", "_blank")}
          >
            A web platform connecting organizations and idea posters with
            aspiring developers. Companies, professionals, or individuals can
            post software ideas they want implemented, allowing students and
            freelance coders to submit solutions in the form of public github
            repositories. Includes gmail login for posters, live post feed,
            personalized dashboards, and more.
          </ProjectEntry>
          <ProjectEntry
            title="Portfolio Website"
            year="2025"
            tools={[
              ["React.js", "info"],
              ["Node.js", "nodejs"],
              ["Bootstrap", "bootstrap"],
              ["Azure", "primary"],
            ]}
            onClick={() =>
              window.open("https://github.com/43110JOSHUA/EPortfolio", "_blank")
            }
          >
            My full-stack portfolio website showcasing my projects, experience,
            technical skills, and statistics from my investment portfolio. 
          </ProjectEntry>
          <ProjectEntry
            title="Student Database"
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
            A local database application for storing and analyzing information
            about friends and classmates. Users can manage contact details,
            track shared classes or projects, search through their network, and
            generate insights through statistical analysis. All data is stored
            securely on the user's local machine.
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
            An immersive recreation of the Taipei Metro system on Roblox.
            Amassed over 30,000 visits and maintains an average of 30+ active
            players daily.
          </ProjectEntry>
        </li>
      </ul>
    </>
  );
};

export default ProjectList;
