import React from "react";
import { FiBell } from "react-icons/fi";

const IncomeTrendCard = ({
  title,
  subtitle,
  status,
  statusColor = "bg-red-100 text-red-600",
  showBell = false,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-4 w-full flex items-center justify-between">
      <div>
        <p className="text-gray-600 font-medium">{title}</p>
        <p className="text-gray-400 text-sm">{subtitle}</p>
      </div>

      <div className="flex items-center gap-3">
        {status && (
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium cursor-pointer ${statusColor}`}
          >
            {status}
          </span>
        )}
        {showBell && <FiBell className="text-gray-400 text-lg cursor-pointer" />}
      </div>
    </div>
  );
};

export default IncomeTrendCard;
