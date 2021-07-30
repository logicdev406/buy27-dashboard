import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const orders = () => {
  return (
    <div className="flex w-screen bg-gray-200 ">
      <Sidebar />
      <div className=" px-16 py-6 ">
        <Navbar />
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
            <div className="flex  text-primary-dark  pl-5  items-center ">
              <div className="flex py-2 items-center mr-36">
                <img className="h-10 w-8 bg-red-300 mr-2" src="" alt="" />
                <h1 className="text-sm w-36 truncate ">
                  {" "}
                  Mens Plain t-shirt skjdhjkwshkldjskldj
                </h1>
              </div>
              <h1 className="mr-64">4</h1>
              <h1 className="mr-64">4,300</h1>
              <h1>Delivered</h1>
            </div>
            <div className="flex  text-primary-dark  pl-5  items-center ">
              <div className="flex py-2 items-center mr-36">
                <img className="h-10 w-8 bg-red-300 mr-2" src="" alt="" />
                <h1 className="text-sm w-36 truncate ">
                  {" "}
                  Mens Plain t-shirt skjdhjkwshkldjskldj
                </h1>
              </div>
              <h1 className="mr-64">4</h1>
              <h1 className="mr-64">4,300</h1>
              <h1>Delivered</h1>
            </div>
            <div className="flex  text-primary-dark  pl-5  items-center ">
              <div className="flex py-2 items-center mr-36">
                <img className="h-10 w-8 bg-red-300 mr-2" src="" alt="" />
                <h1 className="text-sm w-36 truncate ">
                  {" "}
                  Mens Plain t-shirt skjdhjkwshkldjskldj
                </h1>
              </div>
              <h1 className="mr-64">4</h1>
              <h1 className="mr-64">4,300</h1>
              <h1>Delivered</h1>
            </div>
            <div className="flex  text-primary-dark  pl-5  items-center ">
              <div className="flex py-2 items-center mr-36">
                <img className="h-10 w-8 bg-red-300 mr-2" src="" alt="" />
                <h1 className="text-sm w-36 truncate ">
                  {" "}
                  Mens Plain t-shirt skjdhjkwshkldjskldj
                </h1>
              </div>
              <h1 className="mr-64">4</h1>
              <h1 className="mr-64">4,300</h1>
              <h1>Delivered</h1>
            </div>
            <div className="flex  text-primary-dark  pl-5  items-center ">
              <div className="flex py-2 items-center mr-36">
                <img className="h-10 w-8 bg-red-300 mr-2" src="" alt="" />
                <h1 className="text-sm w-36 truncate ">
                  {" "}
                  Mens Plain t-shirt skjdhjkwshkldjskldj
                </h1>
              </div>
              <h1 className="mr-64">4</h1>
              <h1 className="mr-64">4,300</h1>
              <h1>Delivered</h1>
            </div>
            <div className="flex  text-primary-dark  pl-5  items-center ">
              <div className="flex py-2 items-center mr-36">
                <img className="h-10 w-8 bg-red-300 mr-2" src="" alt="" />
                <h1 className="text-sm w-36 truncate ">
                  {" "}
                  Mens Plain t-shirt skjdhjkwshkldjskldj
                </h1>
              </div>
              <h1 className="mr-64">4</h1>
              <h1 className="mr-64">4,300</h1>
              <h1>Delivered</h1>
            </div>
            <div className="flex  text-primary-dark  pl-5  items-center ">
              <div className="flex py-2 items-center mr-36">
                <img className="h-10 w-8 bg-red-300 mr-2" src="" alt="" />
                <h1 className="text-sm w-36 truncate ">
                  {" "}
                  Mens Plain t-shirt skjdhjkwshkldjskldj
                </h1>
              </div>
              <h1 className="mr-64">4</h1>
              <h1 className="mr-64">4,300</h1>
              <h1>Delivered</h1>
            </div>
            <div className="flex  text-primary-dark  pl-5  items-center ">
              <div className="flex py-2 items-center mr-36">
                <img className="h-10 w-8 bg-red-300 mr-2" src="" alt="" />
                <h1 className="text-sm w-36 truncate ">
                  {" "}
                  Mens Plain t-shirt skjdhjkwshkldjskldj
                </h1>
              </div>
              <h1 className="mr-64">4</h1>
              <h1 className="mr-64">4,300</h1>
              <h1>Delivered</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default orders;
