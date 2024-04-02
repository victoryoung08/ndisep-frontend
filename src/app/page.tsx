import LogoBlock from "@/components/blocks/LogoBlock";
import SliderTextWithImage from "@/components/blocks/SliderTextWithImage";
import AboutUs from "@/components/sections/AboutUs";
import LeadForm from "@/components/sections/LeadForm";
import ServiceGrid from "@/components/sections/ServiceGrid";
import { Button } from "@/components/ui/button";
import { getData } from "@/lib/utils";
import {
  PersonSimpleThrow,
  UserCircleCheck,
  RoadHorizon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default async function Home() {
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
  ];

  return (
    <main>
      <nav></nav>
      <section className="flex flex-col items-center justify-center section-padding gap-8 lg:flex-row">
        <div className="flex flex-col gap-8">
          <h1>In Home & Mobile NDIS Exercise Physiology for Liverpool</h1>
          <p>
            Work with our University Qualified Exercise Physiologists
            <br />
            to help you build strength and fitness
          </p>
          <div>
            <Button variant="default">Contact Us</Button>
          </div>
        </div>
        <div className="w-full h-96 relative rounded-xl overflow-hidden">
          <Image
            src="/ndis-exercise-physiology-mobile.jpeg"
            fill
            style={{
              objectFit: "cover",
              width: "100%",
            }}
            alt="NDIS Mobile Exercise Physiologist"
          />
        </div>
      </section>
      <LogoBlock />
      {/* Feature Cards */}
      <section className="section-padding flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h2>Exercise Therapy and Personal Training based on your Needs</h2>
          <p>
            Our Exercise Physiologists specialise working with NDIS Participants
            so rest assure we'll figure out a suitable exercise plan based on
            your needs and goals
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {featureIcons.map((feature) => (
            <div
              className="border-gray-200 border-[1.2px] rounded-lg p-6"
              key={feature.heading}
            >
              <div className="relative inline-block mb-1">
                <feature.icon size={32} className="relative" />
                <div className="absolute bg-stone-200 top-1/2 left-1/2 rounded-[50%] w-1/2 h-2/3 translate-x-[-50%] translate-y-[-50%] z-[-1]"></div>
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
      <SliderTextWithImage slug="home-page-slider" />

      <ServiceGrid />
      <LeadForm />
      <AboutUs />
    </main>
  );
}
