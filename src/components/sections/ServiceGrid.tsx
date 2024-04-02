export default function ServiceGrid() {
  const services = [
    {
      heading: "Weight Loss and Fitness",
      body: "Improve your fitness and reduce your weight with exercise based on your level",
    },
    {
      heading: "Exercise for Walking & Balance",
      body: "Feel better and stronger on your feet to prevent falls and more indepedence",
    },
    {
      heading: "Muscle and Joint Strength",
      body: "Don't let your strength and joints hold you back. We use exercise to help your joints feel more supported",
    },
    {
      heading: "Neurological Rehabilitation",
      body: "Improve your coordination, strength and function to help you do more",
    },
    {
      heading: "Intellectual and ASD Exercise",
      body: "Pair up with our Exercise Professionals to make fitness engaging and motivated",
    },
  ];
  return (
    <section className="section-padding flex flex-col gap-8">
      <div className="text-center">
        <h2>NDIS Exercise Physiology Services</h2>
        <p>You focused and NDIS Specialised</p>
      </div>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
        {services.map((service) => (
          <div
            className="w-full flex flex-col gap-2 border-[1.2px] border-grah-200 p-4 rounded-xl hover:bg-primary hover:text-white hover:scale-[105%] transition-all"
            key={service.heading}
          >
            <h4>{service.heading}</h4>
            <p>{service.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
