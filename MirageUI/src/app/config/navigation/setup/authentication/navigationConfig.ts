export interface InnerListItemConfig {
  /**
   * The text to be displayed.
   * @type {string}
   */
  text: string;

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

  /**
   * The optional link for the item.
   * @type {string}
   */
  link?: string;
}

/**
 * @param {string} text - The text to be displayed.
 * @param {string} [icon] - The optional icon to be displayed.
 * @param {string} [padding] - The optional padding for the item.
 * @param {InnerListItemConfig[]} [children] - The optional children items.
 */
export interface NavigationItem {
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

  link?: string;
  children?: InnerListItemConfig[];
}

/**
 * The navigation items configuration.
      { text: "General settings", icon: "settings", padding: "Px4", link: "/setup/general-settings" },
 */
export const navigationItems: NavigationItem[] = [
  {
    text: "Users",
    children: [
      {
        text: "Roles",
        icon: "group",
        padding: "Px4",
        link: "/setup/authentication/roles",
      },
      {
        text: "Users",
        icon: "groups",
        padding: "Px4",
        link: "/setup/authentication/users",
      },
      {
        text: "Add user",
        icon: "group_add",
        padding: "Px4",
        link: "/setup/authentication/users/add-user",
      },
    ],
  },
  {
    text: "Cloud services",
    link: "/setup/cloud-services",
    children: [
      {
        text: "Firebase",
        icon: "local_fire_department",
        padding: "Px4",
        link: "/setup/authentication/services/firebase",
      },
      {
        text: "Supabase",
        icon: "database",
        padding: "Px4",
        link: "/setup/authentication/services/supabase",
      },
      {
        text: "AWS",
        icon: "cloud",
        padding: "Px4",
        link: "/setup/authentication/services/aws",}
    ],
  },
];
