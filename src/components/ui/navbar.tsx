"use client";
import Link from "next/link";
import { Button } from "./button";

export const handleCTA = () => {
  document
    .getElementById("contactBlock")
    ?.scrollIntoView({ behavior: "smooth" });
};
export default function Navbar() {
  return (
    <nav className="h-16 grid grid-cols-3 items-center justify-center container border-b-[1px]">
      <div>logo</div>
      <div className="mx-auto flex gap-4 font-medium">
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
      </div>
      <div className="ml-auto">
        <Button onClick={handleCTA}>Get started</Button>
      </div>
    </nav>
  );
}
