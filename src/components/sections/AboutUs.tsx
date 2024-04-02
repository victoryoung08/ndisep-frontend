import { Button } from "../ui/button";

export default function AboutUs() {
  return (
    <section className="bg-sky-900 text-white section-padding flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <h2>
          NDIS Exercise Physiologist Looking After Your Health and Fitness
        </h2>
        <p>
          With strong grass roots to the South West Region of Sydney, we're
          focused on delivering high quality mobile and in-home Exercise
          Physiology services for NDIS Participants. Our Exercise Physiologists
          are university trained and qualified with a wealth of experience
          working with NDIS Participants long term. We truly believe everyone
          and anyone can exercise and shouldn't be limited to their situation.
          We're here to help with exercise, improve your independence and
          improve your overall health, wellbeing and fitness.
        </p>
        <div>
          <Button variant="secondary">Button Text</Button>
        </div>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </section>
  );
}
