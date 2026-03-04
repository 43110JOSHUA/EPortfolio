import ProjectEntry from "./ProjectEntry";
import ssIcon from "../../assets/ssIcon.png";
import ssDemo from "../../assets/ssDemoFinal.mp4";
import ccIcon from "../../assets/ccIcon.png";
import ccDemo from "../../assets/ccDemo.png";

const ProjectList = () => {
  return (
    <>
      <div className="d-flex flex-column gap-4 align-items-center">
          <ProjectEntry
            title="Shield Message"
            tagline="Never leave messages unsent."
            icon={ssIcon}
            demoSrc={ssDemo}
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
            via email or SMS.
          </ProjectEntry>
          <ProjectEntry
            title="Charity Coder"
            tagline="Code for a cause."
            icon={ccIcon}
            demoSrc={ccDemo}
            tools={[
              ["Next.js", "nextjs"],
              ["FireBase", "warning"],
              ["Bootstrap", "bootstrap"],
              ["Azure", "primary"],
            ]}
            onClick={() => window.open("https://charitycoder.com/", "_blank")}
          >
            A social platform connecting organizations and idea posters with
           developers. Companies, professionals, or individuals can
            post software ideas they want implemented, allowing students and
            freelance coders to submit solutions in the form of public github
            repositories.
          </ProjectEntry>
      </div>
    </>
  );
};

export default ProjectList;
