import { ReactNode } from "react";

export interface InnerListItemConfig {
  text: string;
  icon?: string;
  padding?: string;
}

export interface NavigationItem {
  text: string;
  icon?: string;
  padding?: string;
  children?: InnerListItemConfig[];
}

export const navigationItems: NavigationItem[] = [
  {
    text: "Home",
    children: [
      { text: "Messages", icon: "settings", padding: "Px4" },
      { text: "Messages", icon: "message", padding: "Px4" },
    ],
  },
  {
    text: "Profile",
    children: [
      { text: "Settings", icon: "settings", padding: "Px4" },
      { text: "Notifications", icon: "notifications", padding: "Px4" },
    ],
  },
  {
    text: "Settings",
    children: [
      { text: "Account", icon: "person", padding: "Px4" },
      { text: "Privacy", icon: "lock", padding: "Px4" },
    ],
  },
];
