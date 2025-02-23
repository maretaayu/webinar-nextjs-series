// import Image from "next/image";
// import Link from "next/link";
// import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Portfolio from "@/components/Portfolio";
import Achievement from "@/components/Achievement";
import Testimony from "@/components/Testimony";
import Articles from "@/components/Articles";

export default function Home() {
  return (
    <>
      <Hero />
      <Achievement />
      <Portfolio />
      <Testimony />
      <Articles />
    </>
  );
}
