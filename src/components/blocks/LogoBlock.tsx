import { getData } from "@/lib/utils";
import Image from "next/image";
import qs from "qs";
const query = qs.stringify({
  populate: {
    logos: {
      populate: {
        media: {
          fields: ["url"],
        },
      },
    },
  },
});
export default async function LogoBlock() {
  const data = await getData("logo-section", query);
  const logos = data.data.logos.media.data;
  console.log(logos);
  return (
    <section className="section-padding flex flex-col items-center gap-8">
      <p className="font-medium">Partnered and Worked Together With</p>
      <div className="flex items-center gap-12">
        {logos.map((logo: any) => (
          <Image
            src={`http://localhost:1337${logo.url}`}
            width={60}
            height={20}
            alt={`logo${logo.id}`}
            key={`logo ${logo.id}`}
          />
        ))}
      </div>
    </section>
  );
}
