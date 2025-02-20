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
        <Image src={thumbnail} alt={title} width={270} height={225} />
        <div>
          <h3>{title}</h3>
          {subtitle && <p>{subtitle}</p>}
          {description && <p>{description}</p>}
        </div>
      </Link>
    </div>
  );
}

export default Card;
