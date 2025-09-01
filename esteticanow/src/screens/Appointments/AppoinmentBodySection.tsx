import React, { useState } from "react";
import { Download, Plus, Search } from "lucide-react";
import filterIcon from "../../assets/filterIcon.png";
import navigation_1 from "../../assets/navigation_1.png";
import navigation_2 from "../../assets/navigation_2.png";
import navigation_3 from "../../assets/navigation_3.png";
import navigation_4 from "../../assets/navigation_4.png";
import navigation_5 from "../../assets/navigation_5.png";
import listViewIcon from "../../assets/listViewIcon.png";
import gridViewIcon from "../../assets/gridViewIcon.png";

type listItems = {
  label: string;
  value: string | number;
  color: string;
};

export const AppointBodySection: React.FC = () => {

  const tabs = [
    { label: "All", count: 7, icon: undefined },
    { label: "New", count: 2, icon: navigation_1 },
    { label: "Upcoming", count: 2, icon: navigation_2 },
    { label: "Ongoing", count: 2, icon: navigation_3 },
    { label: "Completed", count: 2, icon: navigation_4 },
    { label: "Cancelled", count: 2, icon: navigation_5 },
  ];
  
  const summary: listItems[] = [
    { label: "Total Today", value: 7, color: "#F97415" },
    { label: "Completed", value: 2, color: "#4ADE80" },
    { label: "Ongoing", value: 1, color: "#60A5FA" },
    { label: "Upcoming", value: 2, color: "#C084FC" },
    { label: "Revenue", value: "₹3,000", color: "#22C55E" },
    { label: "New Requests", value: 1, color: "#FB923C" },
  ]; 
  
  const [searchQuery, setSearchQuery] = useState("");
  const activeIndex = 0;

  return (
    <div className="p-4 sm:p-6 bg-blue-50 ">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#020817]">Appointments</h1>
          <p className="text-[#64748B] text-[16px]">
            Manage appointments, schedules and availability
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="flex items-center justify-center gap-2 bg-white shadow px-4 py-2 rounded-lg hover:bg-gray-100 transition text-[#020817]">
            <Download className="w-4 h-4" />
            Export
          </button>
          <button className="flex items-center justify-center gap-2 bg-gradient-to-r to-[#6C5DD3] from-[#BFA6FF] text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition">
            <Plus className="w-4 h-4" />
            New Appointment
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-4 mb-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {summary.map((item) => (
            <div
              key={item.label}
              className="text-center"
            >
              <p className="text-xl font-bold" style={{ color: item.color }}>
                {item.value}
              </p>
              <p className="text-[#64748B] text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search for Appointments !"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-64 pl-10 pr-4 py-2 border border-[#E2E8F0] bg-white rounded-lg outline-none"
          />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center border border-[#E2E8F0] rounded-lg px-3 py-2 bg-white w-full sm:w-auto">
            <img src={filterIcon} alt="filter" className="w-4 h-4 mr-1" />
            <select className="bg-transparent outline-none text-gray-700">
              <option>All Status</option>
            </select>
          </div>

          <div className="flex items-center border border-[#E2E8F0] rounded-lg px-3 py-2 bg-white w-full sm:w-auto">
            <select className="bg-transparent outline-none text-gray-700">
              <option>All Types</option>
            </select>
          </div>

          <div className="flex items-center ml-auto rounded-lg overflow-hidden border border-[#E2E8F0]">
            <button className="p-2 bg-white hover:bg-gray-100">
              <img src={gridViewIcon} alt="grid" className="w-5 h-5" />
            </button>
            <button className="p-2 bg-[#6D28D9] text-white">
              <img src={listViewIcon} alt="list" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center gap-2 pb-2 bg-white rounded-[8px] px-[8px] pt-[8px] mb-[20px]">
        {tabs.map((tab, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={tab.label}
              className={`flex items-center justify-center gap-2 flex-1 py-2 text-sm font-medium transition  ${
                isActive
                  ? "bg-[#6C5DD3] text-white rounded-[10px]"
                  : "text-gray-600 hover:bg-gray-100 rounded-[10px]"
              }`}
            >
              {tab.icon && (
                <img src={tab.icon} alt={tab.label} className="w-4 h-4" />
              )}
              <span>{tab.label}</span>
              <span
                className={`ml-1 px-2 py-0.5 text-xs rounded-full ${
                  isActive
                    ? "bg-[#E3E0F9] text-[#6C5DD3]"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
