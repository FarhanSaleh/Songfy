import Carousel from "../../components/Carousel";
import { useEffect } from "react";
import { useMyPlaylist } from "../../Hooks/myPlaylist";

export const MyPlaylist = () => {
  const { data, getMyPlaylist } = useMyPlaylist();

  useEffect(() => {
    getMyPlaylist()
  }, []);

  return (
    <div className=" pr-2 pb-2">
      <div className="rounded-md px-7 py-2">
        <div className="">
          <Carousel
            slides={data}
            title={"My Playlist"}
            id={"myPlaylist"}
            className={"mb-4"}
          />
        </div>
      </div>
    </div>
  );
};
