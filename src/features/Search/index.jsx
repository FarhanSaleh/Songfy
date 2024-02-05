import { CardList } from "../../components/CardList";

export const Search = ({ data, title }) => {
  return (
    <>
      <h2 className="text-2xl font-bold text-white mx-7 mb-2">{title}</h2>
      <div className="px-7 py-2 flex flex-col gap-2">
        {data?.map((item, index) => {
          return (
            <div key={index}>
              <CardList
                
                imgSrc={item?.album?.images?.[1]?.url}
                title={item?.name}
                desc={item?.artists?.[0]?.name}
                duration={item?.duration_ms}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
