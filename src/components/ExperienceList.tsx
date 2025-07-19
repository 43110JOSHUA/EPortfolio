import ExperienceEntry from "./ExperienceEntry";

const ExperienceList = () => {
  return (
    <>
      <h5 className="text-center pb-2">My Experience</h5>
      <ul className="list-group">
        <ExperienceEntry />
        <ExperienceEntry />
        <ExperienceEntry />
      </ul>
    </>
  );
};

export default ExperienceList;
