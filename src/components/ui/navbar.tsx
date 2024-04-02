import Link from "next/link";
import { Button } from "./button";

export default function Navbar() {
  return (
    <nav className="h-16 grid grid-cols-3 items-center justify-center container border-b-[1px]">
      <div>logo</div>
      <div className="mx-auto flex gap-4 font-medium">
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
      </div>
      <div className="ml-auto">
        <Link href="/get-started">
          <Button>Get started</Button>
        </Link>
      </div>
    </nav>
  );
}
