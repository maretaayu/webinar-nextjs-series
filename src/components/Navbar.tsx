import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4">
      <Image src="/logo.png" alt="logo" width={137} height={32} />
      <ul className="flex gap-4">
        <li>
          <Link href="/about">ABOUT</Link>
        </li>
        <li>
          <Link href="/work">WORK</Link>
        </li>
        <li>
          <Link href="/blog">BLOG</Link>
        </li>
      </ul>
      <Button label="Contact me" size="lg" />
    </nav>
  );
}

export default Navbar;
