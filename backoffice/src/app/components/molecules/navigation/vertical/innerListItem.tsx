import HeroIcon from "@/app/components/atoms/icon/hero/heroIcon";
import React, { JSX } from "react";
import { TextColor } from "@/app/enums/text/TextColor";
import { Padding } from "@/app/enums/spacing/padding";
import Link from "next/link";

interface ListItemProps {
  text: string;
  icon?: string;
  link?: string;
  textColor?: keyof typeof TextColor;
  padding?: keyof typeof Padding;
}

/**
 * Component that renders a list item with optional icon.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.text - The text to display in the list item.
 * @param {string} [props.icon] - The optional icon to display in the list item. These can be found on https://fonts.google.com/icons
 * @param {string} [props.textColor] - The color of the text in the list item.
 * @param {string} [props.padding] - The padding around the list item.
 * @param {string} [props.link] - The link to navigate to when the list item is clicked.
 * @returns {JSX.Element} The rendered list item component.
 */
function InnerListItem({
  text,
  icon,
  textColor,
  padding,
  link,
}: ListItemProps): JSX.Element {
  return (
    <>
      {icon ? (
        <Link
          href={link ? link : "#"}
          className={`flex justify-start gap-4 items-center w-full text-base-content rounded transition-all ${
            textColor ? TextColor[textColor] : "text-base-content"
          } ${padding ? Padding[padding] : ""}`}
        >
          <HeroIcon icon={icon} />
          <p className="text-base-content leading-4">{text}</p>
        </Link>
      ) : (
        <Link
          href={link ? link : "#"}
          className={`flex justify-start items-center w-full text-base-content rounded transition-all ${
            textColor ? TextColor[textColor] : "text-base-content"
          } ${padding ? Padding[padding] : ""}`}
        >
          <p className="text-base-content leading-4">{text}</p>
        </Link>
      )}
    </>
  );
}

export default InnerListItem;
