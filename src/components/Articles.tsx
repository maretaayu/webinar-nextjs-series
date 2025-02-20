import Link from "next/link";
import Listing from "./Listing";

function Articles() {
  return (
    <div className="page-center py-16">
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold">Articles</h2>
        <Link href="/blog">See all</Link>
      </div>
      <Listing limit={2} />
    </div>
  );
}

export default Articles;
