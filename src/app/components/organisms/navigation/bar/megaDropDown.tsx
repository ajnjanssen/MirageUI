import React, { ReactElement } from "react";
import MegaMenuColumn from "@/app/components/atoms/navigation/megaMenu/megaMenuColumn";
import GridBox from "@/app/components/templates/grid/GridBox";

interface MegaDropDownProps {
  /**
   * The currently active menu ID.
   */
  activeMenu: string | null;

  /**
   * The children elements, which should be instances of MegaMenuColumn.
   */
  children: ReactElement<typeof MegaMenuColumn>[];

  /**
   * The ID of the mega dropdown.
   */
  megaDropDownId?: string;
}

/**
 * MegaDropDown component that displays a dropdown menu when active.
 *
 * @param {object} props - The component props.
 * @param {string | null} props.activeMenu - The currently active menu ID.
 * @param {ReactElement<typeof MegaMenuColumn>[]} props.children - The children elements, which should be instances of MegaMenuColumn.
 * @param {string} [props.megaDropDownId] - The ID of the mega dropdown.
 * @returns {JSX.Element | null} The rendered component or null if not active.
 */
const MegaDropDown: React.FC<MegaDropDownProps> = ({
  activeMenu,
  children,
  megaDropDownId,
}) => {
  if (activeMenu !== megaDropDownId) {
    return null;
  }

  return (
    <div id={megaDropDownId} className="glass !rounded-none">
      <div className="container mx-auto p-6">
        <h2 className="font-bold text-2xl mb-4">
          Main Hero Message for the menu section
        </h2>
        <p className="mb-8">
          Sub-hero message, not too long and not too short. Make it just right!
        </p>
        <GridBox gridTemplateColumns="Col4">{children}</GridBox>
      </div>
    </div>
  );
};

export default MegaDropDown;
