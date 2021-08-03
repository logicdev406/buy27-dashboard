import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { connect } from "react-redux";
import { getProductsCount } from "../redux/actions/productAction";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { parseCookies } from "../helper/index";
import { useRouter } from "next/router";

// const mapStateToProps = (state) => {
//   return { name: state.main.name };
// };

// const mapDispatchToProps = {
//   setInfo,
// };

const mapStateToProps = (state) => {
  return { count: state.getProductsCount.count };
};

const mapDispatchToProps = {
  getProductsCount,
};

const Home = (props) => {
  const { count, getProductsCount } = props;
  console.log(props.token || "");

  // useEffect(() => {
  //   const router = useRouter();
  //   if (token) {
  //     router.push("/"); // redirects if there is no user
  //   }
  // }, []);

  const router = useRouter();

  useEffect(() => {
    if (!props.token) {
      router.push("/login"); // redirects if there is no user
    }
    // getProductsCount();
  }, [getProductsCount]);

  return (
    <div className="flex  w-screen bg-gray-200">
      <div className="flex ">
        <Sidebar />
        <div className=" px-16 py-6 ">
          <Navbar />
          <div className=" flex items-center mt-10 ">
            <div className=" flex h-24 w-64 px-5 mr-8 bg-white border-2 border-gray-300  rounded shadow-lg items-center justify-between text-primary-dark">
              <div>
                <h1 className=" w-40 font-bold text-2xl overflow-ellipsis ">
                  63
                </h1>
                <h1 className=" text-sm">Customers</h1>
              </div>
              <PeopleAltOutlinedIcon
                className="text-primary-dark"
                fontSize="large"
              />
            </div>
            <div className=" flex h-24 w-64 px-5 mx-8 bg-white border-2 border-gray-300  rounded shadow-lg items-center justify-between text-primary-dark">
              <div>
                <h1 className=" w-40 font-bold text-2xl overflow-ellipsis ">
                  29
                </h1>
                <h1 className=" text-sm">Orders</h1>
              </div>
              <ShoppingCartOutlinedIcon
                className="text-primary-dark"
                fontSize="large"
              />
            </div>
            <div className=" flex h-24 w-64 px-5 mx-8 bg-white border-2 border-gray-300  rounded shadow-lg items-center justify-between text-primary-dark">
              <div>
                <h1 className=" w-40 font-bold text-2xl truncate  ">
                  1,200.0045345345345345345345
                </h1>
                <h1 className=" text-sm">Total ernings</h1>
              </div>
              <MonetizationOnOutlinedIcon
                className="text-primary-dark"
                fontSize="large"
              />
            </div>
            <div className=" flex h-24 w-64 px-5 ml-8 bg-white border-2 border-gray-300 rounded shadow-lg items-center justify-between text-primary-dark">
              <div>
                <h1 className=" w-40 font-bold text-2xl overflow-ellipsis ">
                  54
                </h1>
                <h1 className=" text-sm">Products</h1>
              </div>
              <LocalMallOutlinedIcon
                className="text-primary-dark"
                fontSize="large"
              />
            </div>
          </div>
          <div className="flex pt-5 justify-between">
            <div className=" w-8/12 bg-white rounded border-2 border-gray-300 shadow-lg ">
              <div className="flex items-center justify-between px-5 py-3 border-b-2">
                <h1 className=" font-semibold ">Recent Orders</h1>
                <div className=" flex h-8 px-2 items-center rounded bg-primary-dark text-sm text-white">
                  <p className="mr-1">See all</p>{" "}
                  <ArrowForwardOutlinedIcon fontSize="inherit" />
                </div>
              </div>
              <div className=" flex items-center text-primary-dark justify-between py-3 pl-5 pr-28 border-b-2 text-sm text-semibold">
                <h1>Order Details</h1>
                <h1>Quantity</h1>
                <h1>Order Price</h1>
                <h1>Status</h1>
              </div>
              <div className="h-96 my-2 text-sm overflow-y-auto ">
                <div className="flex  text-primary-dark pl-5 pr-28 items-center justify-between">
                  <div className="flex py-2 items-center">
                    <img className="h-10 w-8 bg-red-300 mr-2" src="" alt="" />
                    <h1 className="text-sm w-20 truncate ">
                      {" "}
                      Mens Plain t-shirt
                    </h1>
                  </div>
                  <h1>4</h1>
                  <h1>4,300</h1>
                  <h1>Delivered</h1>
                </div>
                <div className="flex text-primary-dark pl-5 pr-28 items-center justify-between">
                  <div className="flex py-2 items-center">
                    <img className="h-10 w-8 bg-red-300 mr-2" src="" alt="" />
                    <h1 className="text-sm w-20 truncate ">
                      {" "}
                      Mens Plain t-shirt
                    </h1>
                  </div>
                  <h1>4</h1>
                  <h1>4,300</h1>
                  <h1>Delivered</h1>
                </div>
                <div className="flex  text-primary-dark pl-5 pr-28 items-center justify-between">
                  <div className="flex py-2 items-center">
                    <img className="h-10 w-8 bg-red-300 mr-2" src="" alt="" />
                    <h1 className="text-sm w-20 truncate ">
                      {" "}
                      Mens Plain t-shirt
                    </h1>
                  </div>
                  <h1>4</h1>
                  <h1>4,300</h1>
                  <h1>Delivered</h1>
                </div>
                <div className="flex text-primary-dark pl-5 pr-28 items-center justify-between">
                  <div className="flex py-2 items-center">
                    <img className="h-10 w-8 bg-red-300 mr-2" src="" alt="" />
                    <h1 className="text-sm w-20 truncate ">
                      {" "}
                      Mens Plain t-shirt
                    </h1>
                  </div>
                  <h1>4</h1>
                  <h1>4,300</h1>
                  <h1>Delivered</h1>
                </div>
                <div className="flex  text-primary-dark pl-5 pr-28 items-center justify-between">
                  <div className="flex py-2 items-center">
                    <img className="h-10 w-8 bg-red-300 mr-2" src="" alt="" />
                    <h1 className="text-sm w-20 truncate ">
                      {" "}
                      Mens Plain t-shirt
                    </h1>
                  </div>
                  <h1>4</h1>
                  <h1>4,300</h1>
                  <h1>Delivered</h1>
                </div>
                <div className="flex text-primary-dark pl-5 pr-28 items-center justify-between">
                  <div className="flex py-2 items-center">
                    <img className="h-10 w-8 bg-red-300 mr-2" src="" alt="" />
                    <h1 className="text-sm w-20 truncate ">
                      {" "}
                      Mens Plain t-shirt
                    </h1>
                  </div>
                  <h1>4</h1>
                  <h1>4,300</h1>
                  <h1>Delivered</h1>
                </div>
                <div className="flex  text-primary-dark pl-5 pr-28 items-center justify-between">
                  <div className="flex py-2 items-center">
                    <img className="h-10 w-8 bg-red-300 mr-2" src="" alt="" />
                    <h1 className="text-sm w-20 truncate ">
                      {" "}
                      Mens Plain t-shirt
                    </h1>
                  </div>
                  <h1>4</h1>
                  <h1>4,300</h1>
                  <h1>Delivered</h1>
                </div>
                <div className="flex text-primary-dark pl-5 pr-28 items-center justify-between">
                  <div className="flex py-2 items-center">
                    <img className="h-10 w-8 bg-red-300 mr-2" src="" alt="" />
                    <h1 className="text-sm w-20 truncate ">
                      {" "}
                      Mens Plain t-shirt
                    </h1>
                  </div>
                  <h1>4</h1>
                  <h1>4,300</h1>
                  <h1>Delivered</h1>
                </div>
              </div>
            </div>
            <div className="w-96 bg-white  rounded border-2 border-gray-300 shadow-lg ">
              <div className="flex items-center justify-between px-5 py-3 border-b-2">
                <h1 className=" font-semibold ">Customers</h1>
                <div className=" flex h-8 px-2 items-center rounded bg-primary-dark text-sm text-white">
                  <p className="mr-1">See all</p>{" "}
                  <ArrowForwardOutlinedIcon fontSize="inherit" />
                </div>
              </div>
              <div className="h-96 text-sm mt-8 overflow-y-auto ">
                <div className="flex px-5 py-3 items-center justify-between">
                  <div className="flex items-center">
                    <img
                      className="h-12 w-12 rounded-full bg-red-500 mr-2"
                      src=""
                      alt=""
                    />
                    <div className="">
                      <h1 className="text-sm font-semibold">John Doe</h1>
                      <h1 className="text-xs">Customers</h1>
                    </div>
                  </div>
                  <AccountCircleOutlinedIcon />
                </div>
                <div className="flex px-5 py-3 items-center justify-between">
                  <div className="flex items-center">
                    <img
                      className="h-12 w-12 rounded-full bg-red-500 mr-2"
                      src=""
                      alt=""
                    />
                    <div className="">
                      <h1 className="text-sm font-semibold">John Doe</h1>
                      <h1 className="text-xs">Editor</h1>
                    </div>
                  </div>
                  <AccountCircleOutlinedIcon />
                </div>
                <div className="flex px-5 py-3 items-center justify-between">
                  <div className="flex items-center">
                    <img
                      className="h-12 w-12 rounded-full bg-red-500 mr-2"
                      src=""
                      alt=""
                    />
                    <div className="">
                      <h1 className="text-sm font-semibold">John Doe</h1>
                      <h1 className="text-xs">Customers</h1>
                    </div>
                  </div>
                  <AccountCircleOutlinedIcon />
                </div>
                <div className="flex px-5 py-3 items-center justify-between">
                  <div className="flex items-center">
                    <img
                      className="h-12 w-12 rounded-full bg-red-500 mr-2"
                      src=""
                      alt=""
                    />
                    <div className="">
                      <h1 className="text-sm font-semibold">John Doe</h1>
                      <h1 className="text-xs">Editor</h1>
                    </div>
                  </div>
                  <AccountCircleOutlinedIcon />
                </div>
                <div className="flex px-5 py-3 items-center justify-between">
                  <div className="flex items-center">
                    <img
                      className="h-12 w-12 rounded-full bg-red-500 mr-2"
                      src=""
                      alt=""
                    />
                    <div className="">
                      <h1 className="text-sm font-semibold">John Doe</h1>
                      <h1 className="text-xs">Customers</h1>
                    </div>
                  </div>
                  <AccountCircleOutlinedIcon />
                </div>
                <div className="flex px-5 py-3 items-center justify-between">
                  <div className="flex items-center">
                    <img
                      className="h-12 w-12 rounded-full bg-red-500 mr-2"
                      src=""
                      alt=""
                    />
                    <div className="">
                      <h1 className="text-sm font-semibold">John Doe</h1>
                      <h1 className="text-xs">Editor</h1>
                    </div>
                  </div>
                  <AccountCircleOutlinedIcon />
                </div>
                <div className="flex px-5 py-3 items-center justify-between">
                  <div className="flex items-center">
                    <img
                      className="h-12 w-12 rounded-full bg-red-500 mr-2"
                      src=""
                      alt=""
                    />
                    <div className="">
                      <h1 className="text-sm font-semibold">John Doe</h1>
                      <h1 className="text-xs">Customers</h1>
                    </div>
                  </div>
                  <AccountCircleOutlinedIcon />
                </div>
                <div className="flex px-5 py-3 items-center justify-between">
                  <div className="flex items-center">
                    <img
                      className="h-12 w-12 rounded-full bg-red-500 mr-2"
                      src=""
                      alt=""
                    />
                    <div className="">
                      <h1 className="text-sm font-semibold">John Doe</h1>
                      <h1 className="text-xs">Editor</h1>
                    </div>
                  </div>
                  <AccountCircleOutlinedIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.getInitialProps = async ({ req, res }) => {
  const cookies = parseCookies(req);

  // if (res) {
  //   if (Object.keys(data).length === 0 && data.constructor === Object) {
  //     res.writeHead(301, { Location: "/login" });
  //     res.end();
  //   }
  // }

  return {
    token: cookies.token,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
