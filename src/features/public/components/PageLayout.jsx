import React from "react";

const PageLayout = ({ children }) => {
  return (
    <div className=" container mt-auto max-w-7xl mx-auto lg:mx-5 xl:mx-auto  ">
      {children}
    </div>
  );
};

export default PageLayout;
