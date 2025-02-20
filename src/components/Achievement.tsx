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
        <div className="flex justify-between ">
          {AchievementData.map((item, index) => (
            <div key={index}>
              <p className="font-bold text-2xl">{item.percentage}</p>
              <p className="text-md opacity-50">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Achievement;
