import Image from "next/image";

function Testimony() {
  return (
    <div className="flex flex-col md:flex-row gap-16 page-center py-16">
      <Image
        src="/TestimonyImage.png"
        width={192}
        height={192}
        alt="Testimony"
      />
      <div className="flex flex-col gap-4">
        <p className="text-2xl opacity-50">
          Working with this platform has been a game-changer for my career. Its
          intuitive, visually stunning, and truly showcases my work in the best
          light.
        </p>
        <p className="font-bold text-xl">Alex Johnson</p>
        <p>Freelance Developer</p>
      </div>
    </div>
  );
}

export default Testimony;
