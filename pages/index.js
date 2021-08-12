import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { connect } from "react-redux";
import {
  getProductsCount,
  getTotalErnings,
} from "../redux/actions/productAction";
import { getUsersCount, getUsers } from "../redux/actions/authAction";
import {
  getOrdersCount,
  getOrders,
  updateOrder,
} from "../redux/actions/orderAction";
import BarLoader from "react-bar-loader";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";
import { parseCookies } from "../helper/index";
import { useRouter } from "next/router";
import NumberFormat from "react-number-format";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import CheckRoundedIcon from "@material-ui/icons/Check";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import dateFormat from "dateformat";
import Link from "next/link";

const mapStateToProps = (state) => {
  return {
    count: state.getProductsCount,
    usersCount: state.getUsersCount,
    totalErnings: state.getTotalErnings,
    ordersCount: state.getOrdersCount,
    orders: state.getOrders,
    updatedOrder: state.updatedOrder,
    users: state.users,
  };
};

const mapDispatchToProps = {
  getProductsCount,
  getUsersCount,
  getOrdersCount,
  getTotalErnings,
  getOrders,
  updateOrder,
  getUsers,
};

const Home = (props) => {
  const { count, getProductsCount } = props;
  const { usersCount, getUsersCount } = props;
  const { ordersCount, getOrdersCount } = props;
  const { totalErnings, getTotalErnings } = props;
  const { orders, getOrders } = props;
  const { updatedOrder, updateOrder } = props;
  const { users, getUsers } = props;

  const productCount = count.count;
  const totalUserscount = usersCount.count;
  const totalOrders = ordersCount.count;
  const totalErning = totalErnings.amount;
  const orderList = orders.orders;
  const allUsers = users.users;
  console.log(allUsers);

  const router = useRouter();
  const token = props.token;

  useEffect(() => {
    if (!props.token) {
      router.push("/login"); // redirects if there is no user
    }
    getProductsCount(token);
    getUsersCount(token);
    getTotalErnings(token);
    getOrdersCount(token);
    getOrders(token);
    getUsers(token);
  }, [
    getProductsCount,
    getUsersCount,
    getTotalErnings,
    getOrdersCount,
    getOrders,
  ]);

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
                  {usersCount.loading
                    ? "Loading..."
                    : usersCount.error
                    ? "Error"
                    : totalUserscount}
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
                  {ordersCount.loading
                    ? "Loading..."
                    : ordersCount.error === "Fetch total count of orders faild"
                    ? 0
                    : ordersCount.error
                    ? "Error"
                    : totalOrders}
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
                  {totalErnings.loading ? (
                    "Loading..."
                  ) : totalErnings.error ? (
                    "Error"
                  ) : (
                    <NumberFormat
                      value={totalErning}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                  )}
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
                  {count.loading
                    ? "Loading..."
                    : count.error
                    ? "Error"
                    : productCount}
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
                <Link href="/orders">
                  <a className=" flex h-8 px-2 items-center rounded bg-primary-dark text-sm text-white">
                    <p className="mr-1">See all</p>{" "}
                    <ArrowForwardOutlinedIcon fontSize="inherit" />
                  </a>
                </Link>
              </div>
              <div className=" flex items-center text-primary-dark justify-between py-3 px-5  border-b-2 text-sm font-bold">
                <div className=" flex items-center justify-center h-5 w-5 bg-black text-white rounded-full">
                  <MoreHorizIcon fontSize="small" />
                </div>
                <h1>Order</h1>
                <h1 className="ml-20">Purchases</h1>
                <h1>Ship to</h1>
                <h1>Date</h1>
                <h1>Total</h1>
                <h1 className="mr-8">Action</h1>
              </div>
              <div className="h-96 my-2 text-sm overflow-y-auto ">
                {updatedOrder.loading ? (
                  <BarLoader color="#1D8BF1" height="2" />
                ) : (
                  ""
                )}

                {updatedOrder.success
                  ? router.reload(window.location.pathname)
                  : ""}

                {orders.loading
                  ? "Loading..."
                  : orders.error
                  ? "Error"
                  : orderList.map((item) => {
                      return (
                        <div
                          key={item._id}
                          className="flex py-2 text-primary-dark px-5 items-center justify-between"
                        >
                          {item.status === "processing" ? (
                            <div className="flex items-center justify-center h-5 w-5 bg-black text-white rounded-full">
                              <MoreHorizIcon fontSize="small" />
                            </div>
                          ) : item.status === "delivered" ? (
                            <div className="flex items-center justify-center h-5 w-5 bg-blue-500 text-white rounded-full">
                              <CheckRoundedIcon fontSize="small" />
                            </div>
                          ) : (
                            <div className="flex items-center justify-center h-5 w-5 bg-red-700 text-white rounded-full">
                              <CloseOutlinedIcon fontSize="small" />
                            </div>
                          )}
                          <div className="flex flex-col items-start">
                            <p className="text-sm w-44 truncate ">
                              {" "}
                              #{item.orderNo} by {item.firstName}{" "}
                              {item.lastName}
                            </p>
                            <p className="text-sm   "> {item.user.email} </p>
                          </div>
                          <p>
                            {" "}
                            {item.orderItems.length}{" "}
                            {item.orderItems.length > 1 ? "items" : "item"}{" "}
                          </p>
                          <div className="flex flex-col items-start">
                            <p className="text-sm   ">
                              {" "}
                              {item.street}, {item.city}{" "}
                            </p>
                            <p className="text-sm   "> {item.lga} </p>
                          </div>
                          <p> {dateFormat(item.dateOrdered, "yyyy/mm/dd")} </p>
                          <p>
                            {" "}
                            <NumberFormat
                              value={item.totalPrice}
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={"₦"}
                            />
                          </p>
                          <div className="flex items-start">
                            <button
                              onClick={() => {
                                updateOrder({
                                  id: item._id,
                                  token: token,
                                  Data: { status: "processing" },
                                });
                              }}
                              className="flex items-center justify-center focus:outline-none h-6 w-6 mr-1 rounded shadow-lg border border-primary-dark"
                            >
                              <MoreHorizIcon fontSize="small" />
                            </button>
                            <button
                              onClick={() => {
                                updateOrder({
                                  id: item._id,
                                  token: token,
                                  Data: { status: "delivered" },
                                });
                              }}
                              className="flex items-center justify-center h-6 w-6 mx-1 rounded shadow-lg border border-primary-dark"
                            >
                              <CheckRoundedIcon fontSize="small" />
                            </button>
                            <div className="flex items-center justify-center h-6 w-6 ml-1 rounded shadow-lg border border-primary-dark">
                              <VisibilityOutlinedIcon fontSize="small" />
                            </div>
                          </div>
                        </div>
                      );
                    })}
              </div>
            </div>
            <div className="w-96 bg-white  rounded border-2 border-gray-300 shadow-lg ">
              <div className="flex items-center justify-between px-5 py-3 border-b-2">
                <h1 className=" font-semibold ">Customers</h1>
                <Link href="/customers">
                  <a className=" flex h-8 px-2 items-center rounded bg-primary-dark text-sm text-white">
                    <p className="mr-1">See all</p>{" "}
                    <ArrowForwardOutlinedIcon fontSize="inherit" />
                  </a>
                </Link>
              </div>
              <div className="h-96 text-sm mt-8 overflow-y-auto ">
                {users.loading
                  ? "Loading..."
                  : users.error
                  ? "Error"
                  : allUsers.map((user) => {
                      return (
                        <div className="flex px-5 py-3 items-center justify-between">
                          <div className="flex items-center ">
                            <div className=" flex items-center justify-center text-white font-semibold h-12 w-12 rounded-full bg-primary-dark mr-2">
                              {user.firstName.charAt(0).toUpperCase()}
                            </div>
                            <div className="">
                              <h1 className="text-sm font-semibold">
                                {user.firstName} {user.lastName}
                              </h1>
                              <h1 className="text-xs">{user.role}</h1>
                            </div>
                          </div>
                          <Link href="">
                            <a className="text-primary-dark font-semibold ">
                              view
                            </a>
                          </Link>
                        </div>
                      );
                    })}
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
