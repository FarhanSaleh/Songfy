import { CardList } from "../../components/CardList";
import { useEffect } from "react";
import { useRecentlyPlayed } from "../../Hooks/recentlyPlayed";

export const RecentlyPlayed = () => {
  const { data, getRecentlyPlayed } = useRecentlyPlayed();

  useEffect(() => {
    getRecentlyPlayed();
  }, []);

  return (
    <>
    <h2 className="px-7 py-2 text-2xl font-bold text-white">Recently Play</h2>
      <div className="px-7 py-2 flex flex-col gap-2">
        {data?.map((item, index) => {
          return (
            <>
              <CardList
                key={index}
                imgSrc={item?.track?.album?.images?.[1]?.url}
                title={item?.track?.name}
                desc={item?.track?.artists?.[0]?.name}
                duration={item?.track?.duration_ms}
              />
            </>
          );
        })}
      </div>
    </>
  );
};
