export const Card = ({imgSrc, title, desc}) => {
  return (
    <div className="bg-[#352929] hover:cursor-pointer text-white min-w-52 w-52 rounded-md duration-300">
      <div className="p-3">
        <img src={imgSrc} className="w-52 rounded-md" />
      </div>
      <div className="items-center px-3 pb-3 ">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-300 line-clamp-2 mt-1">{desc}</p>
      </div>
    </div>
  );
};
