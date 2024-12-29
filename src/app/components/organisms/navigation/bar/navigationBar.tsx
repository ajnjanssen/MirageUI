"use client";
import React, { useState, useEffect } from "react";
import Logo from "@/app/components/atoms/navigation/bar/logo";
import ListItems from "@/app/components/molecules/navigation/horizontal/listItems";
import MegaDropDown from "./megaDropDown";
import MegaMenuColumn from "@/app/components/atoms/navigation/megaMenu/megaMenuColumn";
import FlexBox from "@/app/components/templates/flex/FlexBox";
import H4 from "@/app/components/atoms/text/heading/H4";
import LinkComponent from "@/app/components/atoms/navigation/link";
import P from "@/app/components/atoms/text/text/p";

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
        {/* <Logo /> */}
        <H4 fontWeight="medium">
          Mirage<span className="underline font-black">UI</span>
        </H4>
        <FlexBox height="HFull" gap="GapX2">
          <ListItems
            listItemTitle="Configuration"
            dropDownId="Configuration"
            toggleMenu={toggleMenu}
            activeMenu={activeMenu}
            children={undefined}
          />
        </FlexBox>
      </div>
      <div
        onMouseEnter={() => handleMouseEnter("home")}
        onMouseLeave={handleMouseLeave}
        className="w-full h-full"
      >
        <MegaDropDown
          title="Configuration"
          megaDropDownId="Configuration"
          activeMenu={activeMenu}
        >
          <MegaMenuColumn title="Configuration">
            <P textLeading="Relaxed" textSize="xl">
              The configuration section contains all the settings and
              configurations for the MirageUI application.
            </P>
          </MegaMenuColumn>
          <MegaMenuColumn title="Setup">
            <LinkComponent link="/setup" linkTitle="Setup" />
            <LinkComponent
              link="/setup/general-settings"
              linkTitle="General settings"
            />
            <LinkComponent
              link="/setup/theme-settings"
              linkTitle="Theme settings"
            />
            <LinkComponent
              link="/setup/database-provider"
              linkTitle="Database provider"
            />
            <LinkComponent
              link="/setup/environmental-variables"
              linkTitle="Environmental variables"
            />
            <LinkComponent
              link="/setup/authentication"
              linkTitle="Authentication"
            />
          </MegaMenuColumn>
        </MegaDropDown>
      </div>
    </nav>
  );
};

export default NavigationBar;
