import { post } from "@/data/data";
import Card from "./Card";

type ListingProps = {
  limit?: number;
};

function Listing({ limit }: ListingProps) {
  const displayedPosts = limit ? post.slice(0, limit) : post;
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {displayedPosts.map((item, index) => (
        <div key={index}>
          <Card
            thumbnail={item.thumbnail}
            title={item.title}
            subtitle={item.category}
            description={item.date}
            url={`/blog/${item.slug}`}
          />
        </div>
      ))}
    </div>
  );
}

export default Listing;
