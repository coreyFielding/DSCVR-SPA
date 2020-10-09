import React from "react";

const Header = ({ title, titlePos }: any) => {
  return (
    <div
      className={`bg-white border-gray-300 border border-l-0 border-r-0 border-t-0 border-b-1 p-2 text-${titlePos}`}
    >
      <h2 className="text-2xl text-gray-500">{title}</h2>
    </div>
  );
};

export default Header;
