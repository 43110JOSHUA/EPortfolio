import React from "react";

interface Props {
  children: React.ReactNode;
}

const PageBorder = ({ children }: Props) => {
  return (
    <div className="px-0 px-md-5">
      <div className="">{children}</div>
    </div>
  );
};

export default PageBorder;
