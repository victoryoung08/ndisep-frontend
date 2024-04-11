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
      <Link href="/">
        <Image
          src={"/logos/ehLogo.svg"}
          width={28}
          height={28}
          alt="ndis-exercise-physiology-logo"
        />
      </Link>
      <div className="mx-auto flex gap-4 font-medium">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        {/* <button onClick={() => handleClick("about")}>About</button>
        <button onClick={() => handleClick("contactBlock")}>Contact</button> */}
      </div>
      <div className="ml-auto">
        <Link href="/contact">
          <Button>Get started</Button>
        </Link>
      </div>
    </nav>
  );
}
