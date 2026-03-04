import ProjectIcon from "./ProjectIcon";
import ProjectDemo from "./ProjectDemo";

interface Props {
  title: string;
  tagline: string;
  icon?: string; // URL or import of the project icon
  tools: [string, string][]; // [tool name, bootstrap color variant]
  children: React.ReactNode;
  demoSrc?: string; // Optional mp4 demo video
  onClick: () => void; // Optional click handler
}

const ProjectEntry = ({ title, tagline, icon, tools, children, demoSrc, onClick }: Props) => {
  return (
    <div className="bg-light-tan rounded-4 text-start p-4 p-lg-5">
      <div className="d-flex flex-column flex-lg-row align-items-center project-entry-gap">
        
        {/* LEFT: text content */}
        <div className="d-flex flex-column gap-3 gap-xl-4 align-self-start pt-lg-4" style={{ flex: 1 }}>

          {/* Small header: icon + title + year */}
          <div>
            <div className="d-flex fs-5 align-items-center gap-2">
              {icon && <ProjectIcon src={icon} />}
              {title}       
            </div>
          
          </div>
          
          {/* Description */}
          <div className="d-flex flex-column gap-3 py-lg-2">
            <h2 className="mt-2">{tagline}</h2>
            <p className="card-text mb-1">{children}</p>
            <button
              className="btn btn-dark project-entry-btn rounded-pill mb-2" style ={{ width: "100px" }}
              onClick={onClick}
            >
              View <i className="bi bi-arrow-right-circle ms-1"/>
            </button>
            </div>

          {/* Tool badges */}
          <div className="d-flex flex-wrap gap-1 pt-1 pt-xxl-3">
            {tools.map(([tool, color], index) => (
              <span key={index} className={`badge rounded-pill bg-${color}`} style={{ fontSize: "0.85rem" }}>{tool}</span>
            ))}
          </div>
        </div>
            
        {/* RIGHT: demo video */}
        {demoSrc && <ProjectDemo src={demoSrc} />}

      </div>
    </div>
  );
};

export default ProjectEntry;
