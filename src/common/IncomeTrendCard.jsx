import React, { useState, useRef, useEffect } from "react";
import { FiBell, FiBellOff } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

export default function IncomeTrendCard({ item, onToggleReminder, onChangeStatus }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();


  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);

  return (
    <div className="bg-white rounded-xl p-4 shadow-xl border border-gray-100">
      <div className="flex items-center justify-between gap-4">
        
        <div>
          <div className="text-sm sm:text-base md:text-lg font-semibold text-gray-700">
            {item.title}
          </div>
          <div className="text-xs sm:text-sm md:text-base text-gray-400">
            {item.subtitle}
          </div>
        </div>

        
        <div className="flex items-center gap-3 relative">
          <div
            ref={menuRef}
            className="relative"
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen((v) => !v);
            }}
            aria-haspopup="true"
            aria-expanded={menuOpen}
          >
            
            <div
              className={`px-3 py-1 rounded-full text-xs sm:text-sm inline-flex items-center gap-2 ${item.statusColor} cursor-pointer select-none`}
            >
              <span>{item.status}</span>
              <IoIosArrowDown
                className={`text-[14px] transition-transform duration-150 ${
                  menuOpen ? "rotate-180" : "rotate-0"
                }`}
                aria-hidden
              />
            </div>

          
            {menuOpen && (
              <div
                className="absolute right-0 mt-2 w-36 bg-white border border-gray-100 rounded-lg shadow-xl z-30 pointer-events-auto"
                role="menu"
                aria-label="Status options"
              >
                <button
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    onChangeStatus && onChangeStatus("Paid");
                    setMenuOpen(false);
                  }}
                >
                  Paid
                </button>
                <button
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    onChangeStatus && onChangeStatus("Pending");
                    setMenuOpen(false);
                  }}
                >
                  Pending
                </button>
                <button
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    onChangeStatus && onChangeStatus("Overdue");
                    setMenuOpen(false);
                  }}
                >
                  Overdue
                </button>
              </div>
            )}
          </div>

      
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleReminder && onToggleReminder();
            }}
            className="p-2 rounded-md hover:bg-gray-50 cursor-pointer"
            aria-label="toggle-reminder"
          >
            {item.reminder ? (
              <FiBell className="text-lg text-purple-600" />
            ) : (
              <FiBellOff className="text-lg text-gray-400" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
