import {
  ChevronDownIcon,
  ShoppingCartIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import React from "react";

const Sidebar = () => {
  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px] text-gray-600">
      <div className="flex items-center p-4 space-x-2 cursor-pointer hover:bg-gray-200 rounded-xl">
        <UsersIcon className="h-7 text-green-500" />
        <h1 className="hidden font-medium sm:inline-flex">Friends</h1>
      </div>
      <div className="flex items-center p-4 space-x-2 cursor-pointer hover:bg-gray-200 rounded-xl">
        <UserGroupIcon className="h-7 text-green-500" />
        <h1 className="hidden font-medium sm:inline-flex">Groups</h1>
      </div>
      <div className="flex items-center p-4 space-x-2 cursor-pointer hover:bg-gray-200 rounded-xl">
        <ShoppingCartIcon className="h-7 text-green-500" />
        <h1 className="hidden font-medium sm:inline-flex">Marketplace</h1>
      </div>
      <div className="flex items-center p-4 space-x-2 cursor-pointer hover:bg-gray-200 rounded-xl">
        <DesktopComputerIcon className="h-7 text-green-500" />
        <h1 className="hidden font-medium sm:inline-flex">Watch</h1>
      </div>
      <div className="flex items-center p-4 space-x-2 cursor-pointer hover:bg-gray-200 rounded-xl">
        <CalendarIcon className="h-7 text-green-500" />
        <h1 className="hidden font-medium sm:inline-flex">Calendar</h1>
      </div>
      <div className="flex items-center p-4 space-x-2 cursor-pointer hover:bg-gray-200 rounded-xl">
        <ClockIcon className="h-7 text-green-500" />
        <h1 className="hidden font-medium sm:inline-flex">Events</h1>
      </div>
      <div className="flex items-center p-4 space-x-2 cursor-pointer hover:bg-gray-200 rounded-xl">
        <ChevronDownIcon className="h-7 text-green-500" />
        <h1 className="hidden font-medium sm:inline-flex">See More</h1>
      </div>
    </div>
  );
};

export default Sidebar;
