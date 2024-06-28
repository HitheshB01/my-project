import React from "react";

const MoneyCard = ({data}) => {
  return (
    <div className="flex justify-center  ">
      <div className="p-1 bg-orange-100 flex  justify-between w-80 ">
    
        <div>{data.text}</div>
        <div className={`${data.color!=0 ? 'text-red-300':'text-green-300' }`}>{data.amount}</div>
      </div>
    </div>
  );
};

export default MoneyCard;
