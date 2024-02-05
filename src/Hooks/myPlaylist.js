import axios from "axios";
import { useState } from "react";

export const useMyPlaylist = () => {
  const [data, setData] = useState([]);
  const getMyPlaylist = async () => {
    try {
      const res = await axios.get(
        "https://api.spotify.com/v1/me/playlists",
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
  return {data, getMyPlaylist}
};
