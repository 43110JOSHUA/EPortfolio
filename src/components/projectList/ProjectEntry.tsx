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

const ProjectEntry = ({
  title,
  tagline,
  icon,
  tools,
  children,
  demoSrc,
  onClick,
}: Props) => {
  return (
    <div className="bg-light-tan border border-light-grey rounded-4 text-start p-4 p-lg-5">
      <div className="d-flex flex-column flex-lg-row align-items-center project-entry-gap">
        {/* LEFT: text content */}
        <div
          className="d-flex flex-column gap-3 gap-xl-4 align-self-start pt-lg-3"
          style={{ flex: 1 }}
        >
          {/* Header*/}
          <div>
            <h6 className="d-flex fw-bold align-items-center gap-2">
              {icon && <ProjectIcon src={icon} />}
              {title}
            </h6>
          </div>

          {/* Description */}
          <div className="d-flex flex-column gap-2 py-lg-2">
            <h2 className="mt-1">{tagline}</h2>

            <p className="card-text text-secondary mb-3">{children}</p>

            <button
              className="btn btn-dark hover-button rounded-pill align-self-end align-self-lg-start mb-2"
              style={{ width: "100px" }}
              onClick={onClick}
            >
              View <i className="bi bi-arrow-right-circle ms-1" />
            </button>
          </div>

          {/* Tool badges (desktop only when demo exists) */}
          <div
            className={`flex-wrap gap-1 pt-1 pt-xxl-3 justify-content-center justify-content-md-start ${demoSrc ? "d-none d-lg-flex" : "d-flex"}`}
          >
            {tools.map(([tool, color], index) => (
              <span
                key={index}
                className={`badge rounded-pill border bg-${color}`}
                style={{ fontSize: "0.85rem" }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT: demo video */}
        {demoSrc && <ProjectDemo src={demoSrc} />}

        {/* Tool badges (mobile only, below video) */}
        {demoSrc && (
          <div className="d-flex d-lg-none flex-wrap gap-1 justify-content-center justify-content-md-start">
            {tools.map(([tool, color], index) => (
              <span
                key={index}
                className={`badge rounded-pill bg-${color}`}
                style={{ fontSize: "0.85rem" }}
              >
                {tool}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectEntry;
