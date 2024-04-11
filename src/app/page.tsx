import LogoBlock from "@/components/blocks/LogoBlock";
import MainCTAButton from "@/components/blocks/MainCTAButton";
import MapsEmbed from "@/components/blocks/MapsEmbed";
import SliderTextWithImage from "@/components/blocks/SliderTextWithImage";
import AboutUs from "@/components/sections/AboutUs";
import HowItWorks from "@/components/sections/HowItWorks";
import LeadForm from "@/components/sections/LeadForm";
import ServiceGrid from "@/components/sections/ServiceGrid";
import { Button } from "@/components/ui/button";
import { client } from "@/lib/sanity";
import {
  PersonSimpleThrow,
  UserCircleCheck,
  RoadHorizon,
  SealCheck,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default async function Home() {
  // const data = await getContent();
  // console.log(data[0]);
  const featureIcons = [
    {
      heading:
        "Guided and Expert Guidance from Qualified Exercise Professionals",
      body: "Be sure we'll come up with an exercise plan best suited for your individual needs",
      icon: PersonSimpleThrow,
    },
    {
      heading: "Exercise in the comfort of your own home",
      body: "Our Exercise Physiologists come to you, so there's no need to travel anywhere",
      icon: RoadHorizon,
    },
    {
      heading: "Have worked with 100+ NDIS Participants",
      body: "We've had the pleasure working with more than 100+ individuals to improve their health, fitness and confidence",
      icon: UserCircleCheck,
    },
    {
      heading: "No out of pocket charges",
      body: "All our sessions can be completely covered under your NDIS Plan",
      icon: SealCheck,
    },
  ];

  return (
    <main className="bg-amber-50 bg-opacity-5">
      <section className="bg-primary pb-8 rounded-b-[60px]">
        <div className="flex flex-col items-center justify-center section-padding gap-8 lg:flex-row">
          <div className="w-full h-64 relative rounded-xl overflow-hidden lg:order-1 lg:h-96">
            <Image
              src="/photos/exercise-4.png"
              fill
              style={{
                objectFit: "cover",
                width: "100%",
              }}
              alt="NDIS Mobile Exercise Physiologist"
            />
          </div>
          <div className="flex flex-col gap-8 text-white">
            <h1>In Home & Mobile NDIS Exercise Physiology for Liverpool</h1>
            <p>
              Work with our University Qualified Exercise Physiologists
              <br />
              to help you build strength and fitness
            </p>
            <MainCTAButton type="secondary" />
          </div>
        </div>
      </section>
      <LogoBlock textColor="white" />
      {/* Feature Cards */}
      <section className="section-padding flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h2>Exercise Therapy and Personal Training based on your Needs</h2>
          <p>
            Our Exercise Physiologists specialise working with NDIS Participants
            so rest assure we&apos;ll figure out a suitable exercise plan based
            on your needs and goals
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {featureIcons.map((feature) => (
            <div
              className="border-gray-200 bg-amber-50 bg-opacity-10 border-[1.2px] rounded-tr-[96px] rounded-br-[36px] rounded-bl-[72px] rounded-tl-[24px] p-8 overflow-hidden"
              key={feature.heading}
            >
              <div className="relative inline-block mb-1">
                <feature.icon size={32} className="relative z-[2]" />
                <div className="absolute bg-amber-200 bg-opacity-40 top-1/2 left-1/2 rounded-[50%] w-1/2 h-2/3 translate-x-[-50%] translate-y-[-50%] z-[1]"></div>
              </div>
              <div className="flex flex-col gap-1">
                <h3>{feature.heading}</h3>
                <p>{feature.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Social Proof Sliders */}
      <SliderTextWithImage />

      <ServiceGrid />
      <HowItWorks />
      <LeadForm />
      <AboutUs />
      <MapsEmbed />
    </main>
  );
}
