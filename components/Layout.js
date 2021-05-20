import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
