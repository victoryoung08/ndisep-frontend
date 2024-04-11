import HeroBlock from "@/components/blocks/HeroBlock";
import LeadFormBlock from "@/components/blocks/LeadFormBlock";

export default function page() {
  const heroData = {
    heading: "Get Started with Exercise",
    body: "In Home, Mobile NDIS Exercise Physiology with reliable and passionate Exercise Physiologists. We'll bring the exercise to get you one step closer to a healthier and happier you.",
    style: "column",
    alignment: "left",
  };
  return (
    <main>
      <section className="section-padding flex gap-12">
        <div className="w-full">
          <HeroBlock data={heroData} />
        </div>
        <div className="bg-stone-50 w-full mx-auto">
          <LeadFormBlock />
        </div>
      </section>
    </main>
  );
}
