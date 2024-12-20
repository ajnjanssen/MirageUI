"use client";

import React, { useEffect } from "react";
import NavigationListItems from "../../organisms/navigation/list/navigationListItems";
import ListItem from "../../molecules/navigation/vertical/listItem";
import InnerListItem from "../../molecules/navigation/vertical/innerListItem";
import UserContainer from "../../molecules/navigation/vertical/userContainer";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const VerticalNavigation = () => {
  const useNavigationScripts = () => {
    useEffect(() => {
      // Other initialization code if needed
    }, []);
  };

  useNavigationScripts();

  return (
    <nav>
      <div
        id="Main"
        className="xl:rounded-r transform  xl:translate-x-0  ease-in-out transition duration-500 flex justify-start items-start h-full  w-full sm:w-64 bg-gray-900 flex-col"
      >
        <NavigationListItems>
          <ListItem text="Home" collapsible>
            <InnerListItem text="Messages" />
            <InnerListItem text="Messages" icon="settings" />
            <InnerListItem text="Messages" icon="message" />
          </ListItem>
        </NavigationListItems>

        <NavigationListItems>
          <ListItem text="Home" collapsible>
            <InnerListItem text="Messages" />
            <InnerListItem text="Messages" icon="message" />
            <InnerListItem text="Messages" icon="message" />
          </ListItem>
        </NavigationListItems>

        <NavigationListItems>
          <ListItem text="Home" collapsible>
            <InnerListItem text="Messages" />
            <InnerListItem text="Messages" icon="message" />
            <InnerListItem text="Messages" icon="message" />
          </ListItem>
        </NavigationListItems>
        <UserContainer />
      </div>
    </nav>
  );
};

export default VerticalNavigation;
