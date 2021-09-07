import React from "react";

const HeaderIcon = ({ Icon, active }) => {
  return (
    <div className="flex items-center cursor-pointer md:px-10 group sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-green-500">
      <Icon
        className={`h-5 text-center text-gray-500 rounded-xl group-hover:text-green-500
        ${active && "text-green-500"}`}
      />
    </div>
  );
};

export default HeaderIcon;