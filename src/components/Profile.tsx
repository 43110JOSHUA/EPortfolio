import profilePic from "../assets/RoundPP.png";

const Profile = () => {
  return (
    <div className="mx-auto" style={{ width: "260px" }}>
      <div className="position-relative d-inline-block mb-3">
        <img
          src={profilePic}
          alt="Profile"
          className="rounded-circle border border-3"
          style={{ width: "260px", height: "260px" }}
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
      <div className="text-center">
        <h3 className="mb-1">Joshua Adam Tang</h3>
        <p className="text-muted">Fullstack Developer</p>
      </div>
    </div>
  );
};

export default Profile;
