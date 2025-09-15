
import React from "react";
import { FaWifi } from "react-icons/fa6";
import { GiNetworkBars, GiCrown } from "react-icons/gi";
import { IoBatteryFull } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FiPlusCircle, FiCalendar } from "react-icons/fi";

import EarningsCard from "./common/EarningsCard";
import IncomeTrendCard from "./common/IncomeTrendCard";
import CombinedChart from "./common/CombinedChart";

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
      { title: "Pending", amount: "$25,000", color: "text-yellow-500" },
      { title: "Received", amount: "$1,00,000", color: "text-green-600" },
    ],
  };

  const incomeTrends = [
    {
      title: "Invoice #1001",
      subtitle: "₹10,000, Due: 2024-06-15",
      status: "Overdue",
      statusColor: "bg-red-100 text-red-600",
      showBell: true,
    },
    {
      title: "Invoice #1002",
      subtitle: "₹15,000, Due: 2024-06-20",
      status: "Pending",
      statusColor: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Invoice #1003",
      subtitle: "₹20,000, Due: 2024-06-25",
      status: "Paid",
      statusColor: "bg-green-100 text-green-600",
    },
    {
      title: "Invoice #1004",
      subtitle: "₹18,000, Due: 2024-06-28",
      status: "Pending",
      statusColor: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Invoice #1005",
      subtitle: "₹12,000, Due: 2024-07-01",
      status: "Paid",
      statusColor: "bg-green-100 text-green-600",
    },
    {
      title: "Invoice #1006",
      subtitle: "₹30,000, Due: 2024-07-05",
      status: "Overdue",
      statusColor: "bg-red-100 text-red-600",
      showBell: true,
    },
    {
      title: "Invoice #1007",
      subtitle: "₹20,000, Due: 2024-07-10",
      status: "Pending",
      statusColor: "bg-yellow-100 text-yellow-600",
    },
  ];

  return (
    <div className="bg-[#E7CCE5] max-w-sm h-screen mx-auto flex flex-col">
      
      <div className="flex justify-between items-center p-4 text-sm">
        <span className="font-bold">9:45</span>
        <div className="flex gap-2">
          <FaWifi />
          <GiNetworkBars />
          <IoBatteryFull />
        </div>
      </div>

      
      <div className="flex justify-between items-center px-4 pb-2">
        <button className="flex items-center gap-1 text-gray-700">
          <IoIosArrowBack /> Back
        </button>
        <span className="font-bold">Dashboard</span>
        <CgProfile className="text-xl" />
      </div>

      
      <div className="bg-white flex-1 rounded-t-3xl p-4 overflow-y-auto no-scrollbar">
        
        <div className="bg-gray-100 rounded-2xl px-6 py-6 flex flex-col items-center text-center">
          <FiPlusCircle className="text-4xl" />
          <h1 className="mt-3 font-bold bg-gradient-to-b from-pink-400 to-purple-600 bg-clip-text text-transparent">
            Create New Invoice
          </h1>
          <p className="mt-2 text-gray-400 text-sm">
            Start by creating and sending new invoice
          </p>
        </div>

        <p className="mt-6 text-center text-purple-500 text-sm px-2">
          Or upload an existing invoice and set payment reminder
        </p>

       
        <div className="space-y-4 mt-6">
          <EarningsCard
            title={earningsData.total.title}
            amount={earningsData.total.amount}
          />

          
          <div className="flex gap-4">
            {earningsData.halfCards.map((card, index) => (
              <div key={index} className="w-1/2">
                <EarningsCard
                  title={card.title}
                  amount={card.amount}
                  color={card.color}
                />
              </div>
            ))}
          </div>
        </div>

        
        <div className="bg-white rounded-2xl shadow-sm p-3 mt-6">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-gray-600">Time Period</h4>
           
            <div className="text-xs text-gray-400">dd:mm:yyyy - dd:mm:yyyy</div>
          </div>

          <div className="mt-3 flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-3 flex-wrap">
              
              <div className="px-4 py-1 rounded-full text-sm font-medium inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-600">
                1Month
              </div>

             
              <div className="px-4 py-1 rounded-full text-sm font-medium inline-flex items-center gap-2 bg-purple-100 text-purple-600">
                3Months
              </div>

              
              <div className="px-4 py-1 rounded-full text-sm font-medium inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-600">
                1Year
                <GiCrown className="text-xs text-purple-500" />
              </div>
            </div>

            <div className="flex-1" />

            
            <div className="px-4 py-1 rounded-full text-sm font-medium inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-600">
              <FiCalendar className="text-base" />
              <span className="text-sm">Custom</span>
            </div>
          </div>
        </div>

    
        <div className="w-full mt-4">
          <CombinedChart data={chartData} />
        </div>

     
        <div className="mt-6 space-y-3 pb-6">
          {incomeTrends.map((item, index) => (
            <IncomeTrendCard
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              status={item.status}
              statusColor={item.statusColor}
              showBell={item.showBell}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
