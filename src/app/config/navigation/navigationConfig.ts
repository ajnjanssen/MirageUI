export interface InnerListItemConfig {
  /**
   * The text to be displayed.
   * @type {string}
   */
  text: string;

  /**
   * The optional link for the item.
   * @type {string}
   */
  link?: string;

  /**
   * The optional icon to be displayed. These can be found on https://fonts.google.com/icons
   * @type {string}
   */
  icon?: string;

  /**
   * The optional padding for the item.
   * @type {string}
   */
  padding?: string;
}

/**
 * @param {string} text - The text to be displayed.
 * @param {string} [icon] - The optional icon to be displayed.
 * @param {string} [padding] - The optional padding for the item.
 * @param {InnerListItemConfig[]} [children] - The optional children items.
 */
export interface NavigationItem {
  link: string | undefined;
  /**
   * The text to be displayed.
   * @type {string}
   */
  text: string;

  /**
   * The optional icon to be displayed.
   * @type {string}
   */
  icon?: string;

  /**
   * The optional padding for the item.  These can be found on https://fonts.google.com/icons
   * @type {string}
   */
  padding?: string;

  /**
   * The optional children items.
   * @type {InnerListItemConfig[]}
   */
  children?: InnerListItemConfig[];
}

/**
 * The navigation items configuration.
 * @type {NavigationItem[]}
 */
export const navigationItems: NavigationItem[] = [
  {
    text: "Home",
    children: [
      { text: "Home", icon: "home", padding: "Px4" },
      { text: "Messages", icon: "message", padding: "Px4" },
    ],
    link: undefined,
  },
  {
    text: "Profile",
    children: [
      { text: "Settings", icon: "settings", padding: "Px4" },
      { text: "Notifications", icon: "notifications", padding: "Px4" },
    ],
    link: undefined,
  },
  {
    text: "Settings",
    children: [
      { text: "Account", icon: "person", padding: "Px4" },
      { text: "Privacy", icon: "lock", padding: "Px4" },
    ],
    link: undefined,
  },
];
