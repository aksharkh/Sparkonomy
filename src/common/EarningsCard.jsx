import React from "react";

const EarningsCard = ({ title, amount, color = "text-purple-600" }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-4 w-full">
      <p className="text-gray-400 text-sm">{title}</p>
      <p className={`text-2xl font-bold ${color}`}>{amount}</p>
    </div>
  );
};

export default EarningsCard;
