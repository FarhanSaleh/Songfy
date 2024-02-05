import { FaPlay } from "react-icons/fa6";
import { IoMusicalNote } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [pathName, setPathName] = useState("");
  const navigate = useNavigate();

  const handleOpen = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  const Menus = [
    { title: <>Dashboard</>, src: <GoHomeFill />, path: "/dashboard" },
    {
      title: <>My&nbsp;Playlist</>,
      src: <IoMusicalNote />,
      path: "/my-playlist",
    },
    {
      title: <>Recently&nbsp;Played</>,
      src: <FaHistory />,
      path: "/recently-played",
    },
  ];
  const sidebarWidth = open ? "w-60" : "w-20";
  const sidebarBtn = open ? "" : "rotate-180";
  const sidebarTitle = open ? "" : "hidden";
  const sidebarMenu = open ? "scale-100 duration-300" : "scale-0 duration-100";
  const iconCenter = open ? "justify-between" : "justify-center";

  useEffect(() => {
    setPathName(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <div className="flex">
      <div className="h-screen w-fit p-2 sticky top-0 bg-black">
        <div
          className={`bg-[#1E1E1E] h-full ${sidebarWidth} rounded-md duration-300`}
        >
          <div className="text-white px-7 pt-7">
            <div className={`flex  items-center ${iconCenter}`}>
              <h1
                className={`${sidebarTitle} text-3xl font-semibold duration-300`}
              >
                Songfy
              </h1>
              <FaPlay
                className={`cursor-pointer ${sidebarBtn} duration-300 h-9`}
                onClick={() => handleOpen()}
              />
            </div>
            <hr className="my-7" />
          </div>
          <ul className="text-white">
            {Menus.map((menu, index) => {
              return (
                <li
                  key={index}
                  className={`flex items-center gap-11 hover:bg-[#0A68AB] ${
                    menu.path === pathName ? "bg-[#0A68AB]" : ""
                  } text-sm mb-4 px-7 py-3 cursor-pointer duration-300`}
                  onClick={() => {
                    navigate(menu?.path);
                    setPathName(menu?.path);
                  }}
                >
                  <span className={`text-base h-5 flex items-center pl-1`}>
                    {menu.src}
                  </span>
                  <span className={`${sidebarMenu} origin-left`}>
                    {menu.title}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
