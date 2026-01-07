interface Props {
  title: string;
  year: string;
  tools: [string, string][]; // [tool name, bootstrap color variant]
  children: React.ReactNode;
  onClick?: () => void; // Optional click handler
}

const ProjectEntry = ({ title, year, tools, children, onClick }: Props) => {
  return (
    <button className="btn project-entry-btn text-start border p-0" onClick={onClick}>
      <div className="card border-0">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="text-primary">{title}</h5>
            <h6>{year}</h6>
          </div>

          <p className="card-text">{children}</p>
          <div className="container-fluid d-flex flex-wrap gap-1 p-0">
            {tools.map(([tool, color], index) => (
              <span key={index} className={`badge rounded-pill bg-${color}`}>
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
