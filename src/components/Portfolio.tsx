import Card from "./Card";

const PortfolioData = [
  {
    photo: "/Portfolio.png",
    title: "Creative Portfolio",
    url: "https://codewithmareta.vercel.app/",
  },
  {
    photo: "/Portfolio-2.png",
    title: "Innovative Designs",
    url: "https://codewithmareta.vercel.app/",
  },
  {
    photo: "/Portfolio-2.png",
    title: "Artistic Expression",
    url: "https://codewithmareta.vercel.app/",
  },
  {
    photo: "/Portfolio.png",
    title: "Artistic Expression",
    url: "https://codewithmareta.vercel.app/",
  },
];

function Portfolio() {
  return (
    <div className="page-center py-16">
      <h2 className="text-2xl font-bold">My Portfolio</h2>
      <p className="text-md font-light">
        Browse through a selection of your finest work, capturing the essence of
        your creative journey.
      </p>
      <div className="flex flex-col md:flex-row gap-4 mt-16">
        {PortfolioData.map((item, index) => (
          <div key={`portfolio-${index}`}>
            <Card thumbnail={item.photo} title={item.title} url={item.url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
