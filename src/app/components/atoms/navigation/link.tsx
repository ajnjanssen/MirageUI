import Link from "next/link";
import React from "react";

interface LinkProps {
  link: string;
  linkTitle?: string;
  target?: string;
}

const LinkComponent: React.FC<LinkProps> = ({ link, linkTitle, target }) => {
  return (
    <Link href={link} target={target}>
      {linkTitle}
    </Link>
  );
};

export default LinkComponent;
