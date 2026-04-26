import profilePic from "../assets/RoundPP.png";

const Profile = () => {
  return (
    <div
      className="d-flex flex-row flex-wrap-reverse justify-content-center align-items-center row-gap-2 py-4"
      style={{ columnGap: "10rem" }}
    >
      <div className="text-center text-lg-start pb-3 px-3">
        <h1 className="fw-bold">Full Stack Developer</h1>
        <p className="text-secondary">
          "Do not pray for easy lives, pray to be stronger men"
        </p>
        <div className="d-flex flex-row gap-3 justify-content-center justify-content-lg-start">
          <a
            href="https://www.linkedin.com/in/joshuaadamtang/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark hover-button rounded-pill mb-2"
            style={{ width: "150px" }}
          >
            <i className="bi bi-linkedin me-1" /> LinkedIn
          </a>
          <a
            href="https://docs.google.com/document/d/15r2RjzOa4LCba4B5FSgyNipGc0nkuD4fmlAoIB76Row/edit?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-dark hover-button rounded-pill mb-2"
            style={{ width: "150px" }}
          >
            <i className="bi bi-file-earmark-person me-1" /> Resume
          </a>
        </div>
      </div>

      <div className="" style={{ width: "260px" }}>
        <div className="position-relative d-inline-block mb-3">
          <img
            src={profilePic}
            alt="Profile"
            className="rounded-circle border border-3"
            style={{ width: "260px", height: "260px" }}
            loading="eager"
          />
          <div
            className="bg-body-tertiary rounded-circle position-absolute border border-2"
            style={{
              width: "50px",
              height: "50px",
              bottom: "10px",
              right: "10px",
              padding: "0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <i className="bi bi-emoji-smile" style={{ fontSize: "20px" }}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
