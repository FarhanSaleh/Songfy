const Button = ({ text, bgColor, hoverBgColor }) => {
  return (
    <>
      <button
        onClick={()=> handleLogin()}
        className={`${bgColor} text-[15px] py-[8px] px-[32px] rounded-[5px] font-semibold ${hoverBgColor} duration-200`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
