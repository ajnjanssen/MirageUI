import React from "react";
interface bulletListProps {
  children: React.ReactNode;
}

function BulletList({ children }: bulletListProps) {
  return <div>{children}</div>;
}

export default BulletList;
