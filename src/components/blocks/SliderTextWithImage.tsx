"use client";
import Image from "next/image";
import { flattenStrapiData, getData } from "@/lib/utils";
import qs from "qs";
import SplideSlider from "../ui/SplideSlider";

const baseURL = process.env.STRAPI_BASEURL;
const strapiAPI = process.env.STRAPI_API;

type SliderProps = {
  slug: string;
};

export default async function SliderTextWithImage({ slug }: SliderProps) {
  const query = qs.stringify({
    populate: {
      slider: {
        populate: {
          image: {
            fields: ["url"],
          },
        },
      },
    },
  });
  const data = await getData(slug, query);

  return (
    <section className="max-w-[640px] py-12 mx-auto relative flex gap-12">
      <SplideSlider data={data} />
    </section>
  );
}
