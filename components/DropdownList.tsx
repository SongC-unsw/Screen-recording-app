"use client";
import { ChevronDownIcon, MenuIcon } from "lucide-react";
import React, { useState } from "react";

const DropdownList = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="filter-trigger">
          <figure>
            <MenuIcon className="w-5 h-5" />
            <span>Most recent</span>
          </figure>
          <ChevronDownIcon className="w-5 h-5" />
        </div>
      </div>

      {/* IF IS OPEN RENDER THIS */}
      {/* Because of the relative div, the dropdown will be rendered in the same position as the trigger */}
      {isOpen && (
        <ul className="dropdown">
          {["Most recent", "Most liked"].map((item) => (
            <li key={item} className="list-item">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownList;
