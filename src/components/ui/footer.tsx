import Link from "next/link";
import { Button } from "./button";

export default function Footer() {
  const links = [
    {
      title: "Home",
      link: "",
    },
    {
      title: "About",
      link: "",
    },
    {
      title: "Contact",
      link: "",
    },
  ];
  return (
    <footer className="section-padding flex justify-around bg-secondary">
      <div>logo</div>
      <div className="flex flex-col gap-4 text-center">
        {links.map((link) => (
          <Link href={link.link} key={link.title}>
            {link.title}
          </Link>
        ))}
        <Link href="/get-started">
          <Button variant="default">Get Started</Button>
        </Link>
      </div>
    </footer>
  );
}
