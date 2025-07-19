interface Props {
  title: string;
  year: string;
  tools: string[];
  children: React.ReactNode;
}

const ProjectEntry = ({ title, year, tools, children }: Props) => {
  return (
    <button className="btn text-start p-0">
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="text-primary">{title}</h5>
            <h6>{year}</h6>
          </div>

          <p className="card-text">{children}</p>
          <div className="container-fluid d-flex flex-wrap gap-1 p-0">
            {tools.map((tool, index) => (
              <span key={index} className="badge rounded-pill text-bg-warning">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </button>
  );
};

export default ProjectEntry;
