import cn from "classnames";

import Image from "next/image";
import IconWithBackground from "../blocks/IconWithBackground";
import { IconComponent } from "../blocks/IconWithBackground";
import {
  Asterisk,
  Medal,
  ShootingStar,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";
const arrows = [
  {
    name: "leftDownArrow",
    src: "/icons/leftDownArrow.svg",
  },
  {
    name: "rightDownArrow",
    src: "/icons/rightDownArrow.svg",
  },
];
type Data = {
  step: number;
  heading: string;
  body: string;
  icon?: IconComponent;
};

interface DataProps {
  data: Data;
  length: number;
}

export default function AlternatingTextBlock({ data, length }: DataProps) {
  return (
    <div
      className={cn(
        "w-full flex flex-col relative",
        data.step % 2 === 0 ? "items-end" : "items-start"
      )}
      key={data.heading + data.step}
    >
      <div className="card-border relative">
        {data.icon && <IconWithBackground data={{ icon: data.icon }} />}
        <p className="text-lg font-medium">{data.heading}</p>
        <p className="text-balance max-w-[240px]">{data.body}</p>
      </div>
      {data.step % 2 !== 0 ? (
        <Image
          src={arrows[1].src}
          width={48}
          height={20}
          alt=""
          className={`absolute right-[25%] bottom-0 ${
            data.step === length && "hidden"
          }`}
        />
      ) : (
        <Image
          src={arrows[0].src}
          width={48}
          height={20}
          alt=""
          className={`absolute left-[25%] bottom-0 ${
            data.step === length && "hidden"
          }`}
        />
      )}
    </div>
  );
}
