import { Search } from "../../features/Search";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

const Wrapper = () => {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="w-full bg-black overflow-hidden py-2 pr-2">
          <div className="h-full rounded-md bg-[#5B3838] overflow-y-hidden">
            <div className="h-[96vh] overflow-y-auto">
              <Navbar />
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Wrapper;
