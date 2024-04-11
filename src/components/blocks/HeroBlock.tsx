import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

type HeroDataProps = {
  data: {
    heading: string;
    body?: string;
    cta?: { label?: string; url?: string };
    image?: {
      src?: string;
      alt?: string;
      width?: number;
      height?: number;
    };
    style: string;
    alignment?: string;
  };
};

export default function HeroBlock({ data }: HeroDataProps) {
  console.log(data.cta);
  let alignment;
  console.log(data.alignment);
  switch (data.alignment) {
    case "left":
      alignment = "text-left";
    case "center":
      alignment = "text-center";
    case "right":
      alignment = "text-right";
    default:
      alignment = "";
  }
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center section-padding gap-8",
        data.style === "row" ? "lg:flex-row" : "flex-col"
      )}
    >
      {data.image && (
        <div className="w-full h-64 relative rounded-xl overflow-hidden lg:order-1 lg:h-96">
          <Image
            src={data.image?.src ?? "/ndis-exercise-physiology-mobile.jpeg"}
            fill
            style={{
              objectFit: "cover",
              width: "100%",
            }}
            alt={data.image?.alt ?? "exercise habits photo"}
          />
        </div>
      )}
      <div className={cn("flex flex-col gap-8 lg:max-w-[600px]", alignment)}>
        <h1>{data.heading}</h1>
        <p>{data.body ?? undefined}</p>
        {data.cta && data.cta?.label ? (
          <Link href={data.cta.url ?? ""}>
            <Button>{data.cta.label}</Button>{" "}
          </Link>
        ) : null}
      </div>
    </div>
  );
}
