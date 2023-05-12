import { useTheme } from "next-themes";
import React from "react";
import { useRouter } from "next/router";
import ThemeButton from "./ThemeButton";


const Avatar = () => {

  const router = useRouter();
  return (
    <div className="flex ml-auto">
      <div className={`hover:animate-spin ${router.pathname==='/' ? "": "hidden sm:block"}`}>
        <img
          loading="lazy"
          alt="profile-pic"
          height={35}
          width={35}
          className={`rounded-full cursor-pointer`}
          src="/profile-pic.png"
        />
      </div>
      <ThemeButton />
    </div>
  );
};

export default Avatar;
