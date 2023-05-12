import React from "react";

const HeaderOption = ({ Icon, title, selected, onClick }) => {
  return (
    <div
      className={`flex items-center space-x-1 border-b-4 text-sm hover:text-blue-500 cursor-pointer
    hover:border-blue-500 pb-2 ${
      selected ? "text-blue-500 border-blue-400" : "border-transparent"
    }`}
    onClick={() => onClick()}
    >
      <Icon
        className={`h-4 ${
          selected ? "dark:text-blue-500" : "dark:text-gray-300"
        }`}
      />
      <p className="hidden sm:inline-flex">{title}</p>
    </div>
  );
};

export default HeaderOption;
