const AchievementData = [
  {
    percentage: 90,
    description: "success rate",
  },
  {
    percentage: 100,
    description: "success rate",
  },
  {
    percentage: 100,
    description: "success rate",
  },
  {
    percentage: 100,
    description: "success rate",
  },
];
function Achievement() {
  return (
    <div className=" bg-black text-white py-8">
      <div className="page-center">
        <div className="grid grid-cols-2 md:[grid-template-columns:repeat(4,minmax(0,auto))] max-w-[980px] gap-4 m-auto ">
          {AchievementData.map((item, index) => (
            <div key={index} className="w-auto">
              <p className="font-bold text-2xl">{item.percentage}</p>
              <p className="text-md md:text-lg opacity-50">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Achievement;
