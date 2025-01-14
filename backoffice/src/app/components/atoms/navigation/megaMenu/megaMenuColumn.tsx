import React from "react";

interface MegaMenuColumnProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}

function MegaMenuColumn({ title, children, subtitle }: MegaMenuColumnProps) {
  return (
    <div className="w-full flex flex-col gap-4">
      <h3 className="font-bold text-xl mb-3">{title}</h3>
      <p className="text-sm text-gray-100 mb-4">{subtitle}</p>
      {children}
    </div>
  );
}

export default MegaMenuColumn;
