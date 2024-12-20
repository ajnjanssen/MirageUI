import Image from "next/image";
import React from "react";

function NavigationAvatar() {
  return (
    <>
      <Image
        className="rounded-full object-cover h-12 w-12"
        src="https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?cs=srgb&dl=pexels-svetozar-milashevich-99573-1490908.jpg&fm=jpg"
        alt="avatar"
        width={50}
        height={50}
      />
    </>
  );
}

export default NavigationAvatar;
