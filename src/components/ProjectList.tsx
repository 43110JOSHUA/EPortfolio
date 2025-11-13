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
            ]}
            onClick={() => window.open("https://shieldmessage.com", "_blank")}
          >
            A subscription-based deadman's switch messaging platform that
            automatically delivers failsafe messages to designated recipients
            when users fail to check in within a specified timeframe. Features
            include Firebase authentication (Google OAuth and email/password),
            real-time email validation with ZeroBounce API, PostgreSQL database
            with full CRUD operations, Stripe payment processing for premium
            subscriptions, and automated message delivery via Resend (email) and
            Twilio (SMS/MMS for premium users). Built with Next.js Server
            Actions and designed for Azure deployment.
          </ProjectEntry>
          <ProjectEntry
            title="Charity Coder"
            year="2025"
            tools={[
              ["Next.js", "nextjs"],
              ["FireBase", "warning"],
              ["Bootstrap", "bootstrap"],
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
            ]}
            onClick={() =>
              window.open("https://github.com/43110JOSHUA/EPortfolio", "_blank")
            }
          >
            My full-stack portfolio website built with a React frontend and a
            lightweight, separately-hosted Node.js backend. Features live
            statistics of my brokerage account performance through the backend
            for handling secure API requests. Deployed with Microsoft Azure.
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
            A Python + SQLite3 program for storing and analyzing information
            about your friends or classmates using a local database. Users can
            add, edit, and delete entries, search for specific individuals, and
            calculate simple statistics.
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
