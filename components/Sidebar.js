import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import CategoryOutlinedIcon from "@material-ui/icons/CategoryOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 rounded-r-2xl bg-primary-dark text-white ">
      <h1 className=" ml-8 py-4 text-lg ">Buy27</h1>
      <div className="border-b"></div>
      <h1 className=" ml-8 my-4 my-4 text-sm text-gray-500">MAIN</h1>
      <h1 className="ml-8 my-8 ">
        <DashboardOutlinedIcon className="mr-2" /> Dashboard
      </h1>
      <h1 className="ml-8 my-8 ">
        <LocalMallOutlinedIcon className="mr-2" /> Products
      </h1>
      <h1 className="ml-8 my-8 ">
        <CategoryOutlinedIcon className="mr-2" /> Categories
      </h1>
      <h1 className="ml-8 my-8 ">
        <ShoppingCartOutlinedIcon className="mr-2" /> Orders
      </h1>
      <h1 className="ml-8 my-8 ">
        <PeopleAltOutlinedIcon className="mr-2" /> Customers
      </h1>
      <h1 className="ml-8 my-8 ">
        <AccountCircleOutlinedIcon className="mr-2" /> About
      </h1>
    </div>
  );
};

export default Sidebar;
