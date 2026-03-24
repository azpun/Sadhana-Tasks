interface StatsCardProps {
  title: string;
  iconSource: string;
  alt?: string;
  color?: string;
  bgColorIcon?: string;
}

export const StatsCard = ({
  title,
  iconSource,
  alt,
  color,
  bgColorIcon,
}: StatsCardProps) => {
  const colorMap: { [key: string]: string } = {
    blue: "border-l-blue-500",
    orange: "border-l-orange-500",
    green: "border-l-green-500",
    red: "border-l-red-500",
  };

  const bgColorMap: { [key: string]: string } = {
    blue: "bg-blue-200",
    yellow: "bg-yellow-200",
    green: "bg-green-200",
    red: "bg-red-200",
  };

  return (
    <div
      className={`flex flex-col gap-2 p-4 mx-4 my-2 border-l-8 ${colorMap[color as keyof typeof colorMap]} shadow-md rounded-2xl bg-white`}
    >
      <div
        className={`${bgColorMap[bgColorIcon || (color as keyof typeof bgColorMap)]} w-8 h-8 p-1 rounded-md items-center hidden md:flex`}
      >
        <img src={iconSource} alt={alt} />
      </div>
      <div className="flex gap-2 md:flex-col md:gap-0">
        <span>
          {title}
          <span className="inline md:hidden">:</span>
        </span>
        <span className="md:text-2xl md:font-bold">0</span>
      </div>
    </div>
  );
};
