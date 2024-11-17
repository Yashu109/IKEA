// import React from "react";
import "./Navigation.css";

const tabs = [
  { label: "Shop products", action: "shopProducts" },
  { label: "Shop by rooms", action: "shopByRooms" },
  { label: "Offers", action: "offers" },
  { label: "New at IKEA", action: "newAtIkea" },
  { label: "IKEA for Business", action: "ikeaForBusiness" },
  { label: "Customer service", action: "customerService" },
  { label: "Tips, ideas & trends", action: "tipsAndTrends" },
  { label: "More", action: "more" },
];

const NavigationTabs = ({ onTabClick }) => {
  return (
    <div className="navigation-tabs">
      {tabs.map((tab, index) => (
        <span
          key={index}
          className="tab"
          onClick={() => onTabClick(tab.action)}
        >
          {tab.label}
        </span>
      ))}
    </div>
  );
};

export default NavigationTabs;
