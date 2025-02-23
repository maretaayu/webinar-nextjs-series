import Listing from "@/components/Listing";
import Image from "next/image";
import { post } from "@/data/data"; // Import data post
import Button from "@/components/Button";
import Link from "next/link";
import { generateMetadata } from "@/utils/metadata";

export const metadata = generateMetadata({
  title: "Blog",
  description: "ini blog",
});

function Blog() {
  const featuredPost = post.find((p) => p.isFeatured) || post[0];

  return (
    <div className="page-center">
      {/* Hero Section */}
      <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
        <Image
          src={featuredPost.thumbnail}
          alt={featuredPost.title}
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Teks */}
        <div className="absolute inset-0 flex flex-col  justify-center text-white px-4">
          <h1 className="text-4xl font-bold">{featuredPost.title}</h1>
          <p className="text-lg">{featuredPost.content}</p>
          <Link href={`/blog/${featuredPost.slug}`} className="mt-6">
            <Button label="Read More" size="responsive" variant="secondary" />
          </Link>
        </div>
      </div>

      <div className="mt-12">
        <Listing />
      </div>
    </div>
  );
}

export default Blog;
