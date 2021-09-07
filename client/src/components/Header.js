import {
  FlagIcon,
  GlobeIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { HomeIcon, UserGroupIcon } from "@heroicons/react/solid";
import React from "react";
import HeaderIcon from "./HeaderIcon";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 flex items-center p-2 bg-white shadow-md lg:px-5">
      {/* Left */}
      <div className="flex items-center lg:ml-5">
        <div className="flex text-green-500 items-center">
          <h1 className="text-2xl font-bold tracking-tighter">VeganZone</h1>
          <GlobeIcon className="h-7" />
        </div>
        <div className="hidden lg:flex items-center p-2 ml-5 bg-gray-100 rounded-full">
          <SearchIcon className="h-4 text-gray-600" />
          <input
            className="items-center flex-shrink text-xs ml-2 text-gray-600 placeholder-gray-500 bg-transparent outline-none inline-flex"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      {/* Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center justify-end sm:space-x-2 lg:mr-5">
        {/* Profic Pic */}
        <img
          className="hidden object-cover rounded-full md:flex max-h-10"
          src="https://www.onthisday.com/images/people/andre-the-giant-medium.jpg"
          alt=""
        />

        <p className="pr-3 font-semibold whitespace-nowrap text-gray-700">
          André
        </p>
      </div>
    </div>
  );
};

export default Header;
