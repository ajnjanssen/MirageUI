import Image from "next/image";
import React from "react";
import avatar from "@/public/avatar.jpg";
function NavigationAvatar() {
  return (
    <>
      <Image
        className="rounded-full"
        src="https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?cs=srgb&dl=pexels-svetozar-milashevich-99573-1490908.jpg&fm=jpg"
        alt="avatar"
        width={50}
        height={50}
      />
    </>
  );
}

export default NavigationAvatar;
