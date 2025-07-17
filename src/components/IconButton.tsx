import React from "react";

interface IconButtonProps {
  icon: string; // e.g. "bi-moon", "bi-sun"
}

const IconButton: React.FC<IconButtonProps> = ({ icon }) => (
  <button
    type="button"
    className={`btn btn-outline-secondary btn-icon px-2`}
    style={{ fontSize: "1rem" }}
  >
    <i className={icon}></i>
  </button>
);

export default IconButton;
