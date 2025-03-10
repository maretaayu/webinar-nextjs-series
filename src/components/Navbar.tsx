import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

function Navbar() {
  return (
    <nav className=" fixed w-full bg-white z-10 ">
      <div className="flex justify-between items-center p-4 page-center">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={137}
            height={32}
            className="hidden md:block"
          />
        </Link>
        <ul className="flex gap-8 m-auto ">
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
        <Button label="Contact me" size="lg" className="hidden md:block" />
      </div>
    </nav>
  );
}

export default Navbar;
