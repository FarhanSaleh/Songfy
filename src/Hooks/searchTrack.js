import axios from "axios";
import { useEffect, useState } from "react";

export const useSearchTrack = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  
  const getSearchTrack = async () => {
    try {
      const res = await axios.get(
        "https://api.spotify.com/v1/search?q=" + search + "&type=track",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      setData(res?.data?.tracks?.items);
      console.log("Hasil Search di Hooks", res?.data?.tracks?.items);
    } catch (err) {
      console.log(err);
      setData([])
    }
  };

  useEffect(()=>{
    getSearchTrack()
  },[search])
  return {data, getSearchTrack, setSearch}
};
