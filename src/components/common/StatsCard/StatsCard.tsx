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
  return (
    <div
      className={`flex flex-col gap-2 p-4 mx-4 my-2 border-slate-200 border-l-8 border-l-${color}-500 shadow-md rounded-2xl bg-white`}
    >
      <div
        className={`bg-${bgColorIcon || color}-200 w-8 h-8 p-1 rounded-md items-center hidden md:flex`}
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
