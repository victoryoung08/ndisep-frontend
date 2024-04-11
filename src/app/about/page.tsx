import CardWithBorder from "@/components/blocks/CardWithBorder";
import HeroBlock from "@/components/blocks/HeroBlock";
import ImageWithText from "@/components/blocks/ImageWithTextBlock";
import {
  CheckCircle,
  MapPin,
  Person,
  PersonSimpleWalk,
  SealCheck,
} from "@phosphor-icons/react/dist/ssr";

export default function page() {
  const heroData = {
    heading: "Everyone deserves to be healthy",
    body: "Yes, everyone. Our mission is to make sure everyone has access to quality health services. Everyone and anyone can exercise and it's our job to make sure of this.",
    style: "row",
    cta: {
      label: "Learn More",
    },
    image: {},
  };
  const featureCards = [
    {
      heading: "Mobile & In-Home",
      body: "Exercise in the comfort of your own home. We bring our NDIS service to you",
      icon: CheckCircle,
    },
    {
      heading: "100+ Participants",
      body: "We're proud to have helped 100+ people get one step closer to their health goals",
      icon: PersonSimpleWalk,
    },
    {
      heading: "Serving Sydney",
      body: "We're helping NDIS Participants all across Sydney",
      icon: MapPin,
    },
  ];
  const featureRows = [
    {
      heading: "Reliable, passionate and we care",
      body: "We are passionate about what we do and we are committed to making sure everyone has access to quality health services",
      cta: {
        label: "Reach out to us",
        url: "/contact",
      },
      image: {
        src: "/photos/exercise-1.png",
        alt: "ndis exercise physiologist caring for patient",
      },
    },
    {
      heading: "Goal Getters",
      body: "Our goals are yours. You can count on us to get make small but incredible steps towards a healthier, stronger and confident you",
      cta: {
        label: "Improve your Health With Us",
        url: "/contact",
      },
      image: {
        src: "/photos/exercise-2.png",
        alt: "ndis exercise physiologist exercising with NDIS Patient",
      },
    },
  ];
  return (
    <main>
      <header>
        <HeroBlock data={heroData} />
      </header>
      <section className="section-padding">
        <div className="grid grid-cols-3 gap-4">
          {featureCards.map((card) => (
            <CardWithBorder data={card} key={card.heading} />
          ))}
        </div>
      </section>
      <section className="section-padding flex flex-col gap-8">
        {featureRows.map((feature, index: number) => (
          <ImageWithText data={feature} index={index} key={feature.heading} />
        ))}
      </section>
    </main>
  );
}
