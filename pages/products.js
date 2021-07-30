import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

const Products = () => {
  return (
    <div className="flex w-screen bg-gray-200 ">
      <Sidebar />
      <div className=" px-16 py-6 ">
        <Navbar />
        <div className="mt-10 bg-white rounded border-2 border-gray-300 shadow-lg ">
          <div className="flex items-center justify-between px-5 py-3 border-b-2">
            <h1 className=" font-semibold ">Products</h1>
            <div className=" flex h-8 px-2 rounded items-center border border-primary-dark text-primary-dark hover:text-white bg-transparent hover:bg-primary-dark text-sm ">
              Create Product
            </div>
          </div>
          <div className=" flex items-center text-primary-dark justify-between py-3 pl-5 border-b-2 text-sm text-semibold">
            <h1 className="mr-36">Product Details</h1>
            <h1 className="mr-36 ">Count In Stock</h1>
            <h1 className="mr-36 ">Price</h1>
            <h1 className="mr-36 ">IsFeatured</h1>
            <h1 className="mr-36 ">Edit</h1>
            <h1 className="mr-32 ">Delete</h1>
          </div>
          <div className="h-96 my-4 text-sm overflow-y-auto ">
            <div className="flex  text-primary-dark  pl-5 pr-28 items-center justify-between">
              <div className="flex py-2 items-center">
                <img className="h-10 w-8 bg-red-300 mr-2" src="" alt="" />
                <h1 className="text-sm w-20 truncate "> Mens Plain t-shirt</h1>
              </div>
              <h1>4</h1>
              <h1>4,300</h1>
              <StarBorderOutlinedIcon />
              <EditOutlinedIcon />
              <DeleteForeverOutlinedIcon />
            </div>
            <div className="flex  text-primary-dark  pl-5 pr-28 items-center justify-between">
              <div className="flex py-2 items-center">
                <img className="h-10 w-8 bg-red-300 mr-2" src="" alt="" />
                <h1 className="text-sm w-20 truncate "> Mens Plain t-shirt</h1>
              </div>
              <h1>4</h1>
              <h1>4,300</h1>
              <StarBorderOutlinedIcon />
              <EditOutlinedIcon />
              <DeleteForeverOutlinedIcon />
            </div>
            <div className="flex  text-primary-dark  pl-5 pr-28 items-center justify-between">
              <div className="flex py-2 items-center">
                <img className="h-10 w-8 bg-red-300 mr-2" src="" alt="" />
                <h1 className="text-sm w-20 truncate "> Mens Plain t-shirt</h1>
              </div>
              <h1>4</h1>
              <h1>4,300</h1>
              <StarBorderOutlinedIcon />
              <EditOutlinedIcon />
              <DeleteForeverOutlinedIcon />
            </div>
            <div className="flex  text-primary-dark  pl-5 pr-28 items-center justify-between">
              <div className="flex py-2 items-center">
                <img className="h-10 w-8 bg-red-300 mr-2" src="" alt="" />
                <h1 className="text-sm w-20 truncate "> Mens Plain t-shirt</h1>
              </div>
              <h1>4</h1>
              <h1>4,300</h1>
              <StarBorderOutlinedIcon />
              <EditOutlinedIcon />
              <DeleteForeverOutlinedIcon />
            </div>
            <div className="flex  text-primary-dark  pl-5 pr-28 items-center justify-between">
              <div className="flex py-2 items-center">
                <img className="h-10 w-8 bg-red-300 mr-2" src="" alt="" />
                <h1 className="text-sm w-20 truncate "> Mens Plain t-shirt</h1>
              </div>
              <h1>4</h1>
              <h1>4,300</h1>
              <StarBorderOutlinedIcon />
              <EditOutlinedIcon />
              <DeleteForeverOutlinedIcon />
            </div>
            <div className="flex  text-primary-dark  pl-5 pr-28 items-center justify-between">
              <div className="flex py-2 items-center">
                <img className="h-10 w-8 bg-red-300 mr-2" src="" alt="" />
                <h1 className="text-sm w-20 truncate "> Mens Plain t-shirt</h1>
              </div>
              <h1>4</h1>
              <h1>4,300</h1>
              <StarBorderOutlinedIcon />
              <EditOutlinedIcon />
              <DeleteForeverOutlinedIcon />
            </div>
            <div className="flex  text-primary-dark  pl-5 pr-28 items-center justify-between">
              <div className="flex py-2 items-center">
                <img className="h-10 w-8 bg-red-300 mr-2" src="" alt="" />
                <h1 className="text-sm w-20 truncate "> Mens Plain t-shirt</h1>
              </div>
              <h1>4</h1>
              <h1>4,300</h1>
              <StarBorderOutlinedIcon />
              <EditOutlinedIcon />
              <DeleteForeverOutlinedIcon />
            </div>
            <div className="flex  text-primary-dark  pl-5 pr-28 items-center justify-between">
              <div className="flex py-2 items-center">
                <img className="h-10 w-8 bg-red-300 mr-2" src="" alt="" />
                <h1 className="text-sm w-20 truncate "> Mens Plain t-shirt</h1>
              </div>
              <h1>4</h1>
              <h1>4,300</h1>
              <StarBorderOutlinedIcon />
              <EditOutlinedIcon />
              <DeleteForeverOutlinedIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
