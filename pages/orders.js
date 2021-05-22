import Sidebar from "../components/Sidebar";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

const orders = () => {
  return (
    <div className="flex w-screen bg-gray-200 ">
      <Sidebar />
      <div className=" px-16 py-6 ">
        <div className="flex items-center justify-between ">
          <div className=" h-8 flex bg-white rounded-lg">
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
        <div className="mt-10 bg-white rounded border-2 border-gray-300 shadow-lg ">
          <div className="flex items-center justify-between px-5 py-3 border-b-2">
            <h1 className=" font-semibold ">Orders</h1>
          </div>
          <div className=" flex items-center text-primary-dark justify-between py-3 pl-5 border-b-2 text-sm text-semibold">
            <h1 className="mr-56">Order Details</h1>
            <h1 className="mr-56 ">Quantiry</h1>
            <h1 className="mr-56 ">Item Price</h1>
            <h1 className="mr-60 ">Order Status</h1>
          </div>
          <div className="h-96 my-4 text-sm overflow-y-auto ">
            <div className="flex  text-primary-dark  pl-5 pr-28 items-center justify-between">
              <div className="flex py-2 items-center">
                <img className="h-10 w-8 bg-red-300 mr-2" src="" alt="" />
                <h1 className="text-sm w-20 truncate "> Mens Plain t-shirt</h1>
              </div>
              <h1>4</h1>
              <h1>4,300</h1>
              <h1>Delivered</h1>
            </div>
            <div className="flex  text-primary-dark  pl-5 pr-28 items-center justify-between">
              <div className="flex py-2 items-center">
                <img className="h-10 w-8 bg-red-300 mr-2" src="" alt="" />
                <h1 className="text-sm w-20 truncate "> Mens Plain t-shirt</h1>
              </div>
              <h1>4</h1>
              <h1>4,300</h1>
              <h1>Delivered</h1>
            </div>
            <div className="flex  text-primary-dark  pl-5 pr-28 items-center justify-between">
              <div className="flex py-2 items-center">
                <img className="h-10 w-8 bg-red-300 mr-2" src="" alt="" />
                <h1 className="text-sm w-20 truncate "> Mens Plain t-shirt</h1>
              </div>
              <h1>4</h1>
              <h1>4,300</h1>
              <h1>Delivered</h1>
            </div>
            <div className="flex  text-primary-dark  pl-5 pr-28 items-center justify-between">
              <div className="flex py-2 items-center">
                <img className="h-10 w-8 bg-red-300 mr-2" src="" alt="" />
                <h1 className="text-sm w-20 truncate "> Mens Plain t-shirt</h1>
              </div>
              <h1>4</h1>
              <h1>4,300</h1>
              <h1>Delivered</h1>
            </div>
            <div className="flex  text-primary-dark  pl-5 pr-28 items-center justify-between">
              <div className="flex py-2 items-center">
                <img className="h-10 w-8 bg-red-300 mr-2" src="" alt="" />
                <h1 className="text-sm w-20 truncate "> Mens Plain t-shirt</h1>
              </div>
              <h1>4</h1>
              <h1>4,300</h1>
              <h1>Delivered</h1>
            </div>
            <div className="flex  text-primary-dark  pl-5 pr-28 items-center justify-between">
              <div className="flex py-2 items-center">
                <img className="h-10 w-8 bg-red-300 mr-2" src="" alt="" />
                <h1 className="text-sm w-20 truncate "> Mens Plain t-shirt</h1>
              </div>
              <h1>4</h1>
              <h1>4,300</h1>
              <h1>Delivered</h1>
            </div>
            <div className="flex  text-primary-dark  pl-5 pr-28 items-center justify-between">
              <div className="flex py-2 items-center">
                <img className="h-10 w-8 bg-red-300 mr-2" src="" alt="" />
                <h1 className="text-sm w-20 truncate "> Mens Plain t-shirt</h1>
              </div>
              <h1>4</h1>
              <h1>4,300</h1>
              <h1>Delivered</h1>
            </div>
            <div className="flex  text-primary-dark  pl-5 pr-28 items-center justify-between">
              <div className="flex py-2 items-center">
                <img className="h-10 w-8 bg-red-300 mr-2" src="" alt="" />
                <h1 className="text-sm w-20 truncate "> Mens Plain t-shirt</h1>
              </div>
              <h1>4</h1>
              <h1>4,300</h1>
              <h1>Delivered</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default orders;