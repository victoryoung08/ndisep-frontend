import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import cn from "classnames";

type ImageWithTextData = {
  data: {
    heading: string;
    body?: string;
    cta?: { label?: string; url?: string };
    image?: {
      src: string;
      alt?: string;
      width?: number;
      height?: number;
    };
  };
};

interface ImageWithTextDataProps {
  data: ImageWithTextData["data"];
  index?: number | undefined;
}

export default function ImageWithText({ data, index }: ImageWithTextDataProps) {
  console.log(index);
  return (
    <div className="flex flex-col items-center justify-center section-padding gap-8 lg:flex-row">
      <div
        className={cn(
          "w-full h-64 relative rounded-xl overflow-hidden lg:h-96"
        )}
      >
        {data.image && (
          <Image
            src={data.image.src}
            fill
            style={{
              objectFit: "cover",
              width: "100%",
            }}
            alt={data.image?.alt ?? "exercise habits photo"}
          />
        )}
      </div>
      <div
        className={cn(
          "flex flex-col gap-8 order-2",
          index && index % 2 ? "lg:order-last" : "lg:order-first"
        )}
      >
        <h1>{data.heading}</h1>
        <p>{data.body ?? undefined}</p>
        {data.cta && data.cta?.label ? (
          <Link href={data.cta.url ?? "#"}>
            <Button>{data.cta.label}</Button>{" "}
          </Link>
        ) : (
          <Button>{data.cta?.label}</Button>
        )}
      </div>
    </div>
  );
}
