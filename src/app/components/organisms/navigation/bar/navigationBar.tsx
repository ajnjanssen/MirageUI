"use client";
import Logo from "@/app/components/atoms/navigation/bar/logo";
import React, { useState, useEffect } from "react";

function NavigationBar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleMenu = (menu: string | null) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  if (!isClient) {
    return null;
  }

  return (
    <nav className=" bg-white text-base-content z-10 absolute top-0 w-full">
      <div className="mx-auto flex justify-between items-center glass !rounded-none h-24">
        {/* <div className="block p-4 lg:p-6 text-xl text-blue-600 font-bold">
          Logo
        </div> */}
        <Logo />
        <ul className="flex space-x-6">
          <li
            className=""
            onMouseEnter={() => toggleMenu("menu1")}
            onMouseLeave={() => toggleMenu(null)}
          >
            <a
              href="#"
              className="block py-6 px-4 lg:px-6 text-sm lg:text-base font-bold hover:bg-blue-800 hover:text-white"
            >
              Hover
              <span className="ml-2 text-xs">▼</span>
            </a>
          </li>
          <li
            className="relative"
            onMouseEnter={() => toggleMenu("menu2")}
            onMouseLeave={() => toggleMenu(null)}
          >
            {activeMenu === "menu2" && (
              <div className="absolute left-0 w-screen bg-blue-800 text-white shadow-xl">
                <div className="container mx-auto p-6">
                  <h2 className="font-bold text-xl">
                    Add your mega menu content
                  </h2>
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>
      {activeMenu === "menu1" && (
        <div className="glass !rounded-none">
          <div className="container mx-auto p-6">
            <h2 className="font-bold text-2xl mb-4">
              Main Hero Message for the menu section
            </h2>
            <p className="mb-8">
              Sub-hero message, not too long and not too short. Make it just
              right!
            </p>
            <div className="flex flex-wrap">
              {/* Section 1 */}
              <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-6">
                <h3 className="font-bold text-xl mb-3">Heading 1</h3>
                <p className="text-sm text-gray-100 mb-4">
                  Quarterly sales are at an all-time low create spaces to
                  explore the accountable talk and blind vampires.
                </p>
                <a
                  href="#"
                  className="text-blue-300 hover:text-white border-b-2 border-blue-300"
                >
                  Find out more...
                </a>
              </div>
              {/* Section 2 */}
              <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-6">
                <h3 className="font-bold text-xl mb-3">Heading 2</h3>
                <p className="text-sm text-gray-100 mb-4">
                  Prioritize these line items game-plan draw a line in the sand
                  come up with something buzzworthy UX upstream selling.
                </p>
                <a
                  href="#"
                  className="text-blue-300 hover:text-white border-b-2 border-blue-300"
                >
                  Find out more...
                </a>
              </div>
              {/* Section 3 */}
              <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-6">
                <h3 className="font-bold text-xl mb-3">Heading 3</h3>
                <p className="text-sm text-gray-100 mb-4">
                  This proposal is a win-win situation which will cause a
                  stellar paradigm shift, let&apos;s touch base off-line before
                  we fire the new UX experience.
                </p>
                <a
                  href="#"
                  className="text-blue-300 hover:text-white border-b-2 border-blue-300"
                >
                  Find out more...
                </a>
              </div>
              {/* Section 4 */}
              <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-6">
                <h3 className="font-bold text-xl mb-3">Heading 4</h3>
                <p className="text-sm text-gray-100 mb-4">
                  This is a no-brainer to wash your face, or we need to
                  future-proof this high performance keywords granularity.
                </p>
                <a
                  href="#"
                  className="text-blue-300 hover:text-white border-b-2 border-blue-300"
                >
                  Find out more...
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavigationBar;
