import React, { useState } from "react";
import headerIcon from '../assets/headerIcon.png'
import notification from "../assets/notification.png"
interface HeaderProps {
  userName?: string;
  userRole?: string;
}
const Header: React.FC<HeaderProps> = ({
  userName = "Vendor",
  userRole = "Admin",
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button>
            <img
              src={headerIcon}
              alt="button"
              className="w-[28px] h-[28px] object-contain"
            />
          </button>
          <div>
            <h1 className="text-xl font-semibold text-gray-800">
              Welcome Back, {userName}
            </h1>
            <p className="text-sm text-gray-500">
              Hello, here you can manage your orders by zone
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64 pl-10 pr-4 py-2 border border-[#E2E8F0] bg-white rounded-lg outline-none"
            />
          </div>
          <div className="relative">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
              <img
                src={notification}
                alt="button"
                className="w-[16px] h-[16px] object-contain"
              />
              <span className=" h-[12px] w-[12px] flex items-center justify-center font-medium absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full"></span>
            </button>
          </div>
          <div className="flex items-center space-x-3 pl-4  border-gray-200">
            <div className="w-8 h-8 bg-[#F1F5F9] rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-[#020817]">AD</span>
            </div>
            <div className="text-right">
              <div className="text-xs text-[#020817]">{userRole}</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
