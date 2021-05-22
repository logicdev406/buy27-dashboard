import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import CategoryOutlinedIcon from "@material-ui/icons/CategoryOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="h-screen w-60 rounded-r-2xl bg-primary-dark text-white ">
      <h1 className=" ml-8 py-4 text-lg ">Buy27</h1>
      <div className="border-b"></div>
      <h1 className=" ml-8 my-4 my-4 text-sm text-gray-500">MAIN</h1>
      <div className=" flex flex-col ml-8 ">
        <Link href="/">
          <a className=" my-4 ">
            <DashboardOutlinedIcon className="mr-2" />
            Dashboard
          </a>
        </Link>
        <Link href="/products">
          <a className=" my-4 ">
            <LocalMallOutlinedIcon className="mr-2" /> Products
          </a>
        </Link>
        <Link href="#">
          <a className=" my-4 ">
            <CategoryOutlinedIcon className="mr-2" /> Categories
          </a>
        </Link>
        <Link href="/orders">
          <a className=" my-4 ">
            <ShoppingCartOutlinedIcon className="mr-2" /> Orders
          </a>
        </Link>
        <Link href="/customers">
          <a className=" my-4 ">
            <PeopleAltOutlinedIcon className="mr-2" /> Customers
          </a>
        </Link>
        <Link href="/">
          <a className=" my-4 ">
            <AccountCircleOutlinedIcon className="mr-2" /> About
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
