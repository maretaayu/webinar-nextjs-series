import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-black text-white py-20">
      <div className="page-center">
        <p className="text-center">© 2025 Personal Showcase</p>
        <div className="flex justify-center items-center mt-12">
          <ul className="flex gap-6 items-center">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/work">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <span>|</span>
          <div className="flex gap-4 items-center">
            <Link href="#">
              <Image
                src="/IconLinkedin.svg"
                alt="logo"
                width={20}
                height={20}
              />
            </Link>
            <Link href="#">
              <Image src="/IconGithub.svg" alt="logo" width={20} height={20} />
            </Link>
            <Link href="#">
              <Image src="/IconTwitter.svg" alt="logo" width={20} height={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
