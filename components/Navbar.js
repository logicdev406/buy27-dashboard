import React from "react";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";

const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className=" h-8 flex items-center justify-between bg-white rounded-lg">
        <input
          className=" focus:outline-none px-2 py-1 bg-transparent "
          type="text"
          placeholder="Search"
        />
        <div className="h-8 w-16 bg-primary-dark rounded-r-lg text-center">
          <SearchOutlinedIcon className="mt-1 text-white" />
        </div>
      </div>
      <div className="flex items-center">
        <DashboardOutlinedIcon className="mx-1" />
        <NotificationsOutlinedIcon className="mx-1" />
        <MoreVertOutlinedIcon className="mx-1" />
        <div className="h-8 w-8 mx-1 bg-blue-500 rounded-full items-center justify-center"></div>
      </div>
    </div>
  );
};

export default Navbar;
