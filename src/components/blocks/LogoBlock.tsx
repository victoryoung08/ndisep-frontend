// import { getData } from "@/lib/utils";
import Image from "next/image";
// import qs from "qs";
// const query = qs.stringify({
//   populate: {
//     logos: {
//       populate: {
//         media: {
//           fields: ["url"],
//         },
//       },
//     },
//   },
// });
const baseURL = process.env.STRAPI_BASEURL;

const logos = [
  {
    name: "alpha",
    src: "/logos/alpha.webp",
  },
  {
    name: "countryWide",
    src: "/logos/countrywide.png",
  },
  {
    name: "inMotion",
    src: "/logos/inmotion.webp",
  },
  {
    name: "upa",
    src: "/logos/upa.png",
  },
];

type LogoBlockType = {
  textColor: string;
};
export default async function LogoBlock({ textColor }: LogoBlockType) {
  return (
    <section className="section-padding flex flex-col items-center gap-8">
      <p className="font-medium">Partnered and Worked Together With</p>
      <div className="flex items-center gap-12">
        {logos &&
          logos.map((logo: any) => (
            <Image
              src={logo.src}
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
