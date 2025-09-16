import React, { useState } from "react";
import { FaWifi } from "react-icons/fa6";
import { GiNetworkBars, GiCrown } from "react-icons/gi";
import { IoBatteryFull, IoPawSharp } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { FiPlusCircle, FiCalendar } from "react-icons/fi";
import EarningsCard from "./common/EarningsCard";
import IncomeTrendCard from "./common/IncomeTrendCard";
import CombinedChart from "./common/CombinedChart";
import { PiCrown } from "react-icons/pi";
import NewInvoiceModal from "./common/NewInvoiceModal";

export default function App() {
  const chartData = [
    { month: "Jan", income: 3500, momGrowth: 5 },
    { month: "Feb", income: 5000, momGrowth: 15 },
    { month: "Mar", income: 6800, momGrowth: 18 },
    { month: "Apr", income: 3000, momGrowth: -30 },
    { month: "May", income: 5200, momGrowth: 40 },
    { month: "Jun", income: 0, momGrowth: -100 },
  ];

  const earningsData = {
    total: { title: "Total Earnings", amount: "$1,25,000" },
    halfCards: [
      { title: "Pending", amount: "$25,000" },
      { title: "Received", amount: "$1,00,000" },
    ],
  };

  const initialIncomeTrends = [
    {
      id: 1001,
      title: "Invoice #1001",
      subtitle: "₹10,000, Due: 2024-06-15",
      status: "Overdue",
      statusColor: "bg-red-100 text-red-600",
      reminder: true,
    },
    {
      id: 1002,
      title: "Invoice #1002",
      subtitle: "₹15,000, Due: 2024-06-20",
      status: "Pending",
      statusColor: "bg-yellow-100 text-yellow-600",
      reminder: false,
    },
    {
      id: 1003,
      title: "Invoice #1003",
      subtitle: "₹20,000, Due: 2024-06-25",
      status: "Paid",
      statusColor: "bg-green-100 text-green-600",
      reminder: false,
    },
    {
      id: 1004,
      title: "Invoice #1004",
      subtitle: "₹18,000, Due: 2024-06-28",
      status: "Pending",
      statusColor: "bg-yellow-100 text-yellow-600",
      reminder: false,
    },
    {
      id: 1005,
      title: "Invoice #1005",
      subtitle: "₹12,000, Due: 2024-07-01",
      status: "Paid",
      statusColor: "bg-green-100 text-green-600",
      reminder: false,
    },
    {
      id: 1006,
      title: "Invoice #1006",
      subtitle: "₹30,000, Due: 2024-07-05",
      status: "Overdue",
      statusColor: "bg-red-100 text-red-600",
      reminder: true,
    },
    {
      id: 1007,
      title: "Invoice #1007",
      subtitle: "₹20,000, Due: 2024-07-10",
      status: "Pending",
      statusColor: "bg-yellow-100 text-yellow-600",
      reminder: false,
    },
  ];

  const [incomeTrends, setIncomeTrends] = useState(initialIncomeTrends);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // NEW: selected time period state (visual only)
  const [selectedPeriod, setSelectedPeriod] = useState("3Months");

  const toggleReminder = (id) => {
    setIncomeTrends((prev) =>
      prev.map((it) => (it.id === id ? { ...it, reminder: !it.reminder } : it))
    );
  };

  const statusToColor = (status) => {
    if (status === "Paid") return "bg-green-100 text-green-600";
    if (status === "Pending") return "bg-yellow-100 text-yellow-600";
    if (status === "Overdue") return "bg-red-100 text-red-600";
    return "bg-gray-100 text-gray-600";
  };

  // NEW: change status by id and update color
  const changeStatus = (id, newStatus) => {
    setIncomeTrends((prev) =>
      prev.map((it) =>
        it.id === id
          ? { ...it, status: newStatus, statusColor: statusToColor(newStatus) }
          : it
      )
    );
  };

  const createInvoice = ({ title, amount, dueDate, status }) => {
    const nextId =
      incomeTrends.length === 0
        ? 1001
        : Math.max(...incomeTrends.map((x) => x.id)) + 1;

    const newInvoice = {
      id: nextId,
      title: title || `Invoice #${nextId}`,
      subtitle: `₹${amount}, Due: ${dueDate}`,
      status: status || "Pending",
      statusColor: statusToColor(status || "Pending"),
      reminder: false,
    };

    setIncomeTrends((prev) => [newInvoice, ...prev]);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-[#E7CCE5] min-h-screen w-full flex flex-col">
      <div className="flex justify-between items-center p-4 text-sm md:hidden">
        <span className="font-bold text-base">9:45</span>
        <div className="flex gap-2 text-base">
          <FaWifi />
          <GiNetworkBars />
          <IoBatteryFull />
        </div>
      </div>

      <div className="flex justify-between items-center px-4 sm:px-6 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8 bg-[#E7CCE5]">
        <button className="flex items-center gap-2 text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl cursor-pointer">
          <IoIosArrowBack className="text-base sm:text-lg md:text-xl" /> Back
        </button>
        <span className="font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl">
          Dashboard
        </span>
        <img
          src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png"
          alt="Profile"
          className=" cursor-pointer rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
        />
      </div>

      <div className="bg-white flex-1 rounded-t-3xl p-4 sm:p-6 md:p-12 lg:p-16 overflow-y-auto no-scrollbar">
        <div
          className="bg-gray-200 rounded-2xl px-6 py-6 flex flex-col items-center text-center cursor-pointer shadow-xl"
          onClick={() => setIsModalOpen(true)}
        >
          <FiPlusCircle className="text-4xl sm:text-5xl md:text-6xl text-purple-600 mx-1" />
          <h1 className="mt-3 font-bold bg-gradient-to-b from-pink-400 to-purple-600 bg-clip-text text-transparent text-lg sm:text-2xl md:text-3xl lg:text-4xl">
            Create New Invoice
          </h1>
          <p className="mt-2 text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl">
            Start by creating and sending new invoice
          </p>
        </div>

        <p className="mt-6 text-center text-purple-500 text-sm sm:text-base md:text-lg lg:text-xl px-2 md:px-0">
          Or upload an existing invoice and set payment reminder
        </p>

        <div className="space-y-4 mt-6">
          <EarningsCard
            title={earningsData.total.title}
            amount={earningsData.total.amount}
          />

          <div className="flex flex-col md:flex-row gap-4">
            {earningsData.halfCards.map((card, index) => (
              <div key={index} className="w-full md:w-1/2">
                <EarningsCard
                  title={card.title}
                  amount={card.amount}
                  color={card.color}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-3 mt-6 md:px-6 md:py-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-600">
              Time Period
            </h4>
            <div className="text-xs sm:text-sm md:text-base text-gray-400">
              dd:mm:yyyy - dd:mm:yyyy
            </div>
          </div>

          <div className="mt-3 flex items-center gap-3 flex-wrap justify-between">
            <div className="flex items-center gap-3 flex-wrap">
              <button
                type="button"
                aria-pressed={selectedPeriod === "1Month"}
                onClick={() => setSelectedPeriod("1Month")}
                className={` cursor-pointer px-4 py-1 rounded-full text-sm sm:text-base md:text-lg font-medium inline-flex items-center gap-2 ${
                  selectedPeriod === "1Month"
                    ? "bg-purple-100 text-purple-600"
                    : "bg-white border border-gray-200 text-gray-600"
                }`}
              >
                1Month
              </button>

              <button
                type="button"
                aria-pressed={selectedPeriod === "3Months"}
                onClick={() => setSelectedPeriod("3Months")}
                className={`cursor-pointer px-4 py-1 rounded-full text-sm sm:text-base md:text-lg font-medium inline-flex items-center gap-2 ${
                  selectedPeriod === "3Months"
                    ? "bg-purple-100 text-purple-600"
                    : "bg-white border border-gray-200 text-gray-600"
                }`}
              >
                3Months
              </button>

              <button
                type="button"
                aria-pressed={selectedPeriod === "1Year"}
                onClick={() => setSelectedPeriod("1Year")}
                className={`cursor-pointer px-4 py-1 rounded-full text-sm sm:text-base md:text-lg font-medium inline-flex items-center gap-2 ${
                  selectedPeriod === "1Year"
                    ? "bg-purple-100 text-purple-600"
                    : "bg-white border border-gray-200 text-gray-600"
                }`}
              >
                1Year
                <PiCrown className="text-lg md:text-xl text-purple-500" />
              </button>
            </div>

            <div className="flex-1" />

            <div className=" cursor-pointer px-4 py-1 rounded-full text-sm sm:text-base md:text-lg font-medium inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-600">
              <FiCalendar className="text-base md:text-lg" />
              <span className="text-sm sm:text-base md:text-lg">Custom</span>
            </div>
          </div>
        </div>

        <div className="w-full mt-4">
          <CombinedChart data={chartData} />
        </div>

        <div className="mt-6 space-y-3 pb-6">
          {incomeTrends.map((item) => (
            <IncomeTrendCard
              key={item.id}
              item={item}
              onToggleReminder={() => toggleReminder(item.id)}
              onChangeStatus={(newStatus) => changeStatus(item.id, newStatus)}
            />
          ))}
        </div>

        <div className="flex items-center justify-center mt-8 mb-6">
          <div className="text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              <span className="font-bold text-gray-700">Spark</span>
              <IoPawSharp className="inline-block text-purple-600 mx-1" />
              <span className="text-gray-400 font-normal">nomy</span>
            </h1>
            <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl text-gray-500">
              sparking the creator economy
            </p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <NewInvoiceModal
          onClose={() => setIsModalOpen(false)}
          onCreate={createInvoice}
        />
      )}
    </div>
  );
}
