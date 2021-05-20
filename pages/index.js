import Sidebar from "../components/Sidebar";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import { More } from "@material-ui/icons";

export default function Home() {
  return (
    <div className="flex   w-screen bg-gray-200">
      <div className="flex ">
        <Sidebar />
        <div className="  px-14 py-6 bg-red-500">
          <div className="flex items-center ">
            <div className=" h-8 flex bg-white rounded-lg">
              <input
                className=" focus:outline-none px-2 py-1 bg-transparent"
                type="text"
              />
              <div className="h-8 w-16 bg-primary-dark rounded-r-lg text-center">
                <SearchOutlinedIcon className="mt-1 text-white" />
              </div>
            </div>
            <div className="flex items-center">
              <DashboardOutlinedIcon />
              <NotificationsOutlinedIcon />
              <MoreVertOutlinedIcon />
              <div className="h-8 w-8 bg-blue-500 rounded-full items-center justify-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
