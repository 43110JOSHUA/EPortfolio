import React from "react";

interface Props {
  children: React.ReactNode;
}

const PageBorder = ({ children }: Props) => {
  return (
    <div className="px-0 px-xl-5">
      <div>{children}</div>
    </div>
  );
};

export default PageBorder;
