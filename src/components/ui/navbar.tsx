"use client";
import Link from "next/link";
import { Button } from "./button";
import Image from "next/image";

export const handleCTA = () => {
  document
    .getElementById("contactBlock")
    ?.scrollIntoView({ behavior: "smooth" });
};

export const handleClick = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
};
export default function Navbar() {
  return (
    <nav className="h-16 grid grid-cols-3 items-center justify-center container border-b-[1px]">
      <Image
        src={"/logos/ehLogo.svg"}
        width={28}
        height={28}
        alt="ndis-exercise-physiology-logo"
      />
      <div className="mx-auto flex gap-4 font-medium">
        <button onClick={() => handleClick("about")}>About</button>
        <button onClick={() => handleClick("contactBlock")}>Contact</button>
      </div>
      <div className="ml-auto">
        <Button onClick={handleCTA}>Get started</Button>
      </div>
    </nav>
  );
}
