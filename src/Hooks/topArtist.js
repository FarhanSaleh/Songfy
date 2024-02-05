import axios from "axios";
import { useState } from "react";

export const useTopArtist = () => {
  const [data, setData] = useState([]);
  const getTopArtist = async () => {
    try {
      const res = await axios.get(
        "https://api.spotify.com/v1/me/top/artists",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      setData(res?.data?.items);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return {data, getTopArtist}
};
