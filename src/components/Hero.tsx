import Image from "next/image";
import Button from "./Button";

const images = [
  { src: "/img-1.png", alt: "Project 1" },
  { src: "/img-1.png", alt: "Project 2" },
  { src: "/img-1.png", alt: "Project 3" },
  { src: "/img-1.png", alt: "Project 4" },
];

const items = [
  {
    icon: "/icon-code.svg",
    text: "Full-stack Development from concept to deployment",
  },
  { icon: "/icon-web.svg", text: "Expertise in Modern Web Technologies" },
  { icon: "/icon-write.svg", text: "Open Source Contributor & Tech Writer" },
];

function Hero() {
  return (
    <div className="flex flex-col md:flex-row justify-between">
      <div className="justify-center text-left flex flex-col gap-8 w-full md:w-1/2 px-[16px] md:px-[100px]">
        <h1 className="font-black text-3xl">
          Hi, I’m <span className="text-blue-500">John Doe</span>
        </h1>
        <h2 className="text-5xl font-bold">
          Turning complex problems into elegant solutions
        </h2>
        <div className="flex gap-8 items-center">
          <Button label="Let's Work Together" size="lg" />
          <div className="flex gap-2 items-center ">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                width={48}
                height={48}
                className="ml-[-20px]"
              />
            ))}

            <p className="font-semibold">100+</p>
          </div>
        </div>
        <p className="text-2xl font-normal opacity-40 mb-5">
          Place your trust in me to deliver clean, efficient, and future-proof
          solutions that make an <b>impact</b>
        </p>
      </div>

      <div className="bg-gray-50 p-16 flex flex-col items-center relative">
        <Image
          src="/JohnDoeImage.png"
          width={282}
          height={400}
          alt="John Doe"
          className="hidden md:block  "
        />
        <Image
          src="/OptimizedScoreImage.png"
          width={235}
          height={204}
          alt="Optimized Score"
          className="hidden md:block absolute bottom-60 left-[-40px] animate-bounce"
        />

        <div>
          {items.map((item, index) => (
            <div key={`item-${index}`} className="flex gap-2  justify-between">
              <div
                key={index}
                className={`flex gap-2 py-4 justify-between items-center 
                ${index !== 0 ? "border-t border-gray-200" : ""}`}
              >
                <Image src={item.icon} width={24} height={24} alt="Icon" />
                <p>{item.text}</p>
              </div>
              <Image
                src="/icon-arrow.svg"
                width={12}
                height={24}
                alt="Icon Arrow"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
