import React, { useEffect, useState } from "react";

interface ListItemsProps {
  listItemTitle: string;
  children: React.ReactNode;
  dropDownId?: string;
  toggleMenu: (menu: string | null) => void;
  activeMenu: string | null;
}

const ListItems: React.FC<ListItemsProps> = ({
  listItemTitle,
  dropDownId,
  toggleMenu,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <ul className="flex h-full space-x-6">
      <li
        className="h-full"
        onMouseEnter={() => toggleMenu(dropDownId ?? null)}
        onMouseLeave={() => toggleMenu(null)}
      >
        <a
          href="#"
          className="h-full items-center px-6 flex justify-center align-center text-sm lg:text-base font-bold hover:bg-blue-800 hover:text-white"
        >
          {listItemTitle}
          <span className="ml-2 text-xs">▼</span>
        </a>
      </li>
    </ul>
  );
};

export default ListItems;
