import ExperienceEntry from "./ExperienceEntry";

const ExperienceList = () => {
  return (
    <>
      <h5 className="text-center pb-2">My Experience</h5>
      <ul className="list-group">
        <ExperienceEntry
          role="Learning Assistant"
          company="University of California Irvine"
          date="Sep 2024 - Jun 2025"
        >
          <li>Collaborated with peers on game design projects</li>
          <li>Participated in weekly game jams and hackathons</li>
          <li>Contributed to open-source game development initiatives</li>
        </ExperienceEntry>
        <ExperienceEntry
          role="Member"
          company="Video Game Development Club"
          date="Sep 2024 - Jun 2025"
        >
          <li>Collaborated with peers on game design projects</li>
          <li>Participated in weekly game jams and hackathons</li>
          <li>Contributed to open-source game development initiatives</li>
        </ExperienceEntry>
      </ul>
    </>
  );
};

export default ExperienceList;
