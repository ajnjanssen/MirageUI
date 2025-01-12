import React from "react";
import "material-symbols";

interface Props {
  icon: string;
  color?: string;
  outlineColor?: string;
}

/**
 * HeroIcon component renders a span element with a specified icon and styles.
 *
 * @param {Props} props - The properties for the HeroIcon component.
 * @param {string} props.icon - The name of the icon to be displayed. These can be found on https://fonts.google.com/icons
 * @param {string} props.color - The color of the icon.
 * @param {string} props.outlineColor - The color of the icon's outline.
 *
 * @returns {JSX.Element} The rendered span element with the specified icon and styles.
 */
const HeroIcon: React.FC<Props> = ({ icon, color, outlineColor }) => {
  const style = {
    color: color,
    WebkitTextStrokeColor: outlineColor,
    WebkitTextStrokeWidth: outlineColor ? "0px" : undefined,
  };

  return (
    <span className={`material-symbols-outlined`} style={style}>
      {icon}
    </span>
  );
};

export default HeroIcon;
