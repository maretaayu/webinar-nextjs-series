import Image from "next/image";
import Link from "next/link";

type CardProps = {
  thumbnail: string;
  title: string;
  url: string;
  subtitle?: string;
  description?: string;
};

function Card({ thumbnail, title, url, subtitle, description }: CardProps) {
  return (
    <div>
      <Link href={url}>
        <Image
          src={thumbnail}
          alt={title}
          width={270}
          height={225}
          className="w-full min-w-[270px] object-cover h-auto"
        />
        <div className="mt-3">
          <h3 className="font-bold text-lg">{title}</h3>
          {subtitle && <p>{subtitle}</p>}
          {description && <p className="opacity-50">{description}</p>}
        </div>
      </Link>
    </div>
  );
}

export default Card;
