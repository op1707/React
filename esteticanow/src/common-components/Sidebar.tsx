import React, { useState } from "react";
import brandLogo from "../assets/brandLogo.png";
import frameLogo from "../assets/frameLogo.png";
import services from "../assets/services.png";
import appointment from "../assets/appointment.png";
import posOrders from "../assets/posOrders.png";
import coupons from "../assets/coupons.png";
import banner from "../assets/banner.png";
import salesReports from "../assets/salesReports.png";
import users from "../assets/users.png";
import transactions from "../assets/transactions.png";
interface MenuItem {
  id: string;
  value: string;
  icon?: string;
  isActive?: boolean;
}

interface MenuSection {
  title?: string;
  items: MenuItem[];
}

const Sidebar: React.FC = () => {
  const [activeItem] = useState("appointments");

  const menuSections: MenuSection[] = [
    {
      items: [
        { id: "dashboards", value: "Dashboards", icon: frameLogo },
        { id: "pos", value: "POS", icon: frameLogo },
        { id: "services", value: "Services", icon: services },
        { id: "inventory", value: "Inventory", icon: frameLogo },
      ],
    },
    {
      title: "Orders",
      items: [
        {
          id: "appointments",
          value: "Appointments",
          icon: appointment,
          isActive: true,
        },
        { id: "pos-orders", value: "POS Orders", icon: posOrders },
      ],
    },
    {
      title: "Users",
      items: [
        { id: "staff", value: "Staff", icon: users },
        { id: "users", value: "Users", icon: users },
      ],
    },
    {
      title: "Offers & Promotions",
      items: [
        { id: "banners", value: "Banners", icon: banner },
        { id: "coupons", value: "Coupons", icon: coupons },
        { id: "reels", value: "Reels Management", icon: coupons },
        { id: "analytics", value: "Analytics", icon: coupons },
      ],
    },
    {
      title: "Transactions & Reports",
      items: [
        { id: "transactions", value: "Transactions", icon: transactions },
        { id: "sale-reports", value: "Sale Reports", icon: salesReports },
        { id: "product-reports", value: "Product Reports", icon: posOrders },
      ],
    },
  ];

  const handleItemClick = (itemId: string) => {
    console.log(itemId);
    // setActiveItem(itemId);
  };

  return (
    <div className="w-64 h-screen flex flex-col bg-black text-[#AAAAAA]">
      <div className="p-6">
        <img src={brandLogo} alt="Brand logo" />
      </div>
      <div className="flex-1 overflow-y-auto py-4">
        {menuSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-6">
            {section.title && (
              <div className="px-5 mb-3">
                <h3 className="text-[#8E92BC] font-poppins font-semibold text-base uppercase">
                  {section.title}
                </h3>
              </div>
            )}

            <div className="">
              {section.items.map((item) => (
                <div key={item.id}>
                  <button
                    onClick={() => handleItemClick(item.id)}
                    className="w-full flex items-center justify-between px-6 py-3 text-left"
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={item.icon}
                        className="w-[20px] h-[20px]"
                        alt="Brand logo"
                      />
                      <span
                        className={`text-[#AAAAAA] ${
                          activeItem === item.id ? "text-[#BFA6FF]" : ""
                        }`}
                      >
                        {item.value}
                      </span>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
