import axios from "axios";
import { useState } from "react";

export const useTopPlaylist = () => {
  const [data, setData] = useState([]);
  const getTopPlaylist = async () => {
    try {
      const res = await axios.get(
        "https://api.spotify.com/v1/browse/categories/toplists/playlists",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      setData(res?.data?.playlists?.items);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return {data, getTopPlaylist}
};
