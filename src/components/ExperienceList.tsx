import ExperienceEntry from "./ExperienceEntry";

const ExperienceList = () => {
  return (
    <>
      <ul className="list-group" style={{minWidth: "260px"}}>
        <ExperienceEntry
          role="Learning Assistant"
          company="University of California Irvine"
          date="Sep 2025 - Dec 2025"
        >
          <li>
            Coordinated with professors, teaching assistants, and other learning
            assistants.
          </li>
          <li>Assisted students with coursework and lab activities.</li>
          <li>Attended weekly meetings and training.</li>
        </ExperienceEntry>
        <ExperienceEntry
          role="Member"
          company="Video Game Development Club"
          date="Sep 2024 - Jun 2025"
        >
          <li>
            Worked in a team of 10 to design, develop, and ship games on Unity
            Game Engine.
          </li>
          <li>Participated in quarter long game jams.</li>
          <li>
            Utilized Github for version control and collaborative workflow.
          </li>
        </ExperienceEntry>
        <ExperienceEntry
          role="Intern"
          company="Guam Economic Development Authority"
          date="Jun 2022 - Aug 2022"
        >
          <li>Collaborated with peers to develop an advertisement.</li>
          <li>Managed outreach for government programs.</li>
          <li>Worked at the help desk and assisted with customer service.</li>
        </ExperienceEntry>
      </ul>
    </>
  );
};

export default ExperienceList;
