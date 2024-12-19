// src/app/utils/buttonClassGenerator.ts
import { ButtonColor } from "@/app/enums/button/ButtonColor";

/**
 * Generates a CSS class string for a button based on its type and disabled state.
 *
 * @param type - The color type of the button, which determines its styling.
 * @param disabled - A boolean indicating whether the button is disabled.
 * @returns A string containing the CSS classes for the button.
 */
export const generateButtonClass = (
  type: ButtonColor,
  disabled: boolean
): string => {
  const baseClass =
    "py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 glass";
  const typeClass = {
    [ButtonColor.Primary]:
      "bg-primary text-white hover:bg-primary-dark focus:ring-primary",
    [ButtonColor.Secondary]:
      "bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary",
    [ButtonColor.Base100]:
      "bg-base-100 text-base-content hover:bg-base-300 focus:ring-base-100",
    [ButtonColor.Base200]:
      "bg-base-200 text-base-content hover:bg-base-300 focus:ring-base-200",
    [ButtonColor.Base300]:
      "bg-base-300 text-base-content hover:bg-base-200 focus:ring-base-300",
    [ButtonColor.BaseContent]:
      "bg-base-300 text-base-content hover:bg-base-200 focus:ring-base-content",
    [ButtonColor.Warning]:
      "bg-warning text-white hover:bg-warning-dark focus:ring-warning",
    [ButtonColor.Error]:
      "bg-error text-white hover:bg-error-dark focus:ring-error",
    [ButtonColor.Disabled]: "bg-gray-300 text-gray-500",
  };

  return `${baseClass} ${typeClass[type]} ${
    disabled ? typeClass[ButtonColor.Disabled] + " cursor-not-allowed" : ""
  }`;
};
