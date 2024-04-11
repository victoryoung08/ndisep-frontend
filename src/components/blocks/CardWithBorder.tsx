import { Component } from "react";

type CardDataProps = {
  data: {
    heading: string;
    body?: string;
    icon: React.ElementType;
  };
};

export default function CardWithBorder({ data }: CardDataProps) {
  return (
    <div
      className="border-gray-200 bg-amber-50 bg-opacity-10 border-[1.2px] rounded-tr-[96px] rounded-br-[36px] rounded-bl-[72px] rounded-tl-[24px] p-8 overflow-hidden"
      key={data.heading}
    >
      <div className="relative inline-block mb-1">
        <data.icon size={32} className="relative z-[2]" />
        <div className="absolute bg-amber-200 bg-opacity-40 top-1/2 left-1/2 rounded-[50%] w-1/2 h-2/3 translate-x-[-50%] translate-y-[-50%] z-[1]"></div>
      </div>
      <div className="flex flex-col gap-1">
        <h3>{data.heading}</h3>
        <p>{data.body}</p>
      </div>
    </div>
  );
}
