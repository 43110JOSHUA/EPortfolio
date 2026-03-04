interface Props {
  src: string;
}

const ProjectIcon = ({ src }: Props) => {
  return (
    <div>
      <img
        src={src}
        alt="Project Icon"
        style={{ width: "30px", height: "30px" }}
      />
    </div>
  );
};

export default ProjectIcon;
