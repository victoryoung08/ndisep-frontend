import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import qs from "qs";

const baseURL = process.env.STRAPI_BASEURL;
const strapiAPI = process.env.STRAPI_API;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getData = async (id: string, query: string) => {
  const options: RequestInit = {
    method: "GET",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${strapiAPI}`,
    },
  };
  const fetchURL = baseURL + id + "?" + query;
  console.log(fetchURL);
  const res = await fetch(fetchURL, {
    method: "GET",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${strapiAPI}`,
    },
  });
  if (!res.ok) {
    throw new Error("Error with fetching data");
  }
  const data = await res.json();
  const flattenedData = flattenStrapiData(data);
  return flattenedData;
};

export const flattenStrapiData = (data: any): any => {
  if (Array.isArray(data)) {
    return data.map((item) => flattenStrapiData(item));
  } else if (data !== null && typeof data === "object") {
    if (data.attributes) {
      // Specifically for Strapi structure
      return { id: data.id, ...flattenStrapiData(data.attributes) };
    } else {
      const flattenedObj: any = {};
      for (const key of Object.keys(data)) {
        flattenedObj[key] = flattenStrapiData(data[key]);
      }
      return flattenedObj;
    }
  }
  return data;
};
