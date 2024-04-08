"use client";
import Link from "next/link";
import { Button } from "./button";
import Image from "next/image";
import { handleClick } from "./navbar";

export default function Footer() {
  const links = [
    {
      title: "About",
      link: "about",
    },
    {
      title: "Contact",
      link: "contactBlock",
    },
    {
      title: "Get Started",
      link: "contactBlock",
    },
  ];
  return (
    <footer className=" bg-stone-800 text-white mt-24">
      <section className="section-padding flex justify-around">
        <Image
          src={"/logos/ehLogoWhite.svg"}
          width={32}
          height={32}
          alt="brand-logo-white"
        />
        <div className="flex flex-col gap-4 text-center">
          {links.map((link) => (
            <button key={link.title} onClick={() => handleClick(link.link)}>
              {link.title}
            </button>
          ))}
        </div>
      </section>
    </footer>
  );
}
