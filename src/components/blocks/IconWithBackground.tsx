type IconData = {
  data: {
    icon: IconComponent;
  };
};

export type IconComponent = React.ElementType;



export default function IconWithBackground({ data }: IconData) {
  return (
    <div className="relative inline-block mb-1">
      <data.icon size={32} className={`relative`} />
      <div className="absolute bg-stone-200 top-1/2 left-1/2 rounded-[50%] w-1/2 h-2/3 translate-x-[-50%] translate-y-[-50%] z-[-1]"></div>
    </div>
  );
}
