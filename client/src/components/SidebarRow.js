import React from "react";

function SidebarRow(Icon, title) {
  return (
    <div className="flex items-center p-4 space-x-2 cursor-pointer hover:bg-gray-200 rounded-xl">
      <Icon className="h-8 text-green-500" />
      <h1 className="hidden font-medium sm:inline-flex">{title}</h1>
    </div>
  );
}

export default SidebarRow;
