import axios from "axios";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useSearchTrack } from "../../Hooks/searchTrack";
import { useNavigate } from "react-router-dom";
import { Search } from "../../features/Search";

const Navbar = () => {
  const [data, setData] = useState();
  const [searchTitle, setSearchTitle] = useState();
  const navigate = useNavigate();
  const { data: dataSearch, setSearch } = useSearchTrack();
  const getMe = async () => {
    try {
      const res = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setData(res?.data);
      // console.log("ini data user",res);
    } catch (err) {
      console.log(err);
      navigate("/");
    }
  };
  useEffect(() => {
    getMe();
  }, []);
  return (
    <>
      <div className={`py-2 pr-2 sticky top-0 bg-[#5B3838]`}>
        <div className="h-20 flex justify-between items-center px-7 py-7">
          <h1 className="text-3xl font-bold text-white">
            Welcome <span className="font-light">{data?.display_name}</span>
          </h1>
          <div className="flex items-center gap-6">
            {/* ini input search */}
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setSearchTitle(
                  event.target.search.value ? "Search Result" : ""
                );
                setSearch(event.target.search.value);
              }}
            >
              <div className="flex items-center px-4 gap-3 w-64 h-12 rounded-2xl bg-white/40 border border-slate-300">
                <label htmlFor="search">
                  <IoSearch className="text-white text-xl" />
                </label>
                <input
                  id="search"
                  type="text"
                  name="search"
                  className="outline-none w-full h-full bg-transparent text-white placeholder:text-gray-200"
                  placeholder="Search"
                />
              </div>
            </form>

            <a href={`https://open.spotify.com/user/`+data?.id}>
              <img
                src={data?.images[0]?.url}
                alt="Profile"
                className="rounded-full h-12 border-4 border-slate-300"
              />
            </a>
          </div>
        </div>
      </div>
      <div>
        <Search data={dataSearch} title={searchTitle} />
      </div>
    </>
  );
};

export default Navbar;
