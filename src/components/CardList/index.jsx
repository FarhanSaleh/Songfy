import { timeFormat } from "../../Utils/timeUtils";

export const CardList = ({ imgSrc, title, desc, duration }) => {
  return (
    <div className="flex justify-between items-center bg-[#352929] hover:cursor-pointer text-white rounded-md duration-300">
      <div className="flex items-center">
        <div className="px-4 py-3">
          <img src={imgSrc} className="w-14 rounded-md" />
        </div>
        <div className="items-center  ">
          <h3 className="font-semibold">{title}</h3>
          <p className="text-gray-300 mt-1">{desc}</p>
        </div>
      </div>
      <div className="px-6">
        <p>{timeFormat(duration)}</p>
      </div>
    </div>
  );
};
