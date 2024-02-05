import { useEffect } from "react";

import Carousel from "../../components/Carousel";
import { useTopPlaylist } from "../../Hooks/topPlaylist";
import { useTopArtist } from "../../Hooks/topArtist";

const Dashboard = () => {
  const { data:topPlaylist, getTopPlaylist } = useTopPlaylist();
  const { data:topArtist, getTopArtist } = useTopArtist();

  useEffect(() => {
    getTopPlaylist();
    getTopArtist();
  }, []);

  return (
    <div className=" pr-2 pb-2">
      <div className="rounded-md px-7 py-2">
        <div className="">
          <Carousel
            slides={topPlaylist}
            title={"Top Playlist"}
            id={"topPlaylist"}
            className={"mb-4"}
          />
          <Carousel
            slides={topArtist}
            title={"Top Artist"}
            id={"topArtist"}
            className={"mb-4"}
          />
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
