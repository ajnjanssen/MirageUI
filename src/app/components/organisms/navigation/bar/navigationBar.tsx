"use client";
import React, { useState, useEffect } from "react";
import Logo from "@/app/components/atoms/navigation/bar/logo";
import ListItems from "@/app/components/molecules/navigation/horizontal/listItems";
import MegaDropDown from "./megaDropDown";
import MegaMenuColumn from "@/app/components/atoms/navigation/megaMenu/megaMenuColumn";

const NavigationBar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleMenu = (menu: string | null) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const handleMouseEnter = (menu: string | null) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  if (!isClient) {
    return null;
  }

  return (
    <nav className="bg-white text-base-content z-10 absolute top-0 w-full">
      <div className="mx-auto flex justify-between items-center glass !border-none !rounded-none h-24 px-6">
        <Logo />
        <ListItems
          listItemTitle="Hover"
          dropDownId="test"
          toggleMenu={toggleMenu}
          activeMenu={activeMenu}
        >
          Home
        </ListItems>
      </div>
      <div
        onMouseEnter={() => handleMouseEnter("test")}
        onMouseLeave={handleMouseLeave}
      >
        <MegaDropDown megaDropDownId="test" activeMenu={activeMenu}>
          <MegaMenuColumn />
          <MegaMenuColumn />
          <MegaMenuColumn />
          <MegaMenuColumn />
        </MegaDropDown>
      </div>
    </nav>
  );
};

export default NavigationBar;
