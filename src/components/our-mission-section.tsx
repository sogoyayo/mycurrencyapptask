import MissionImage from "@/assets/images/mission-image.jpg";

export const MissionSection = () => {
  return (
    <section className="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center">
      <div className="p-8 md:p-12 lg:px-16 lg:pl-56">
        <div className="mx-auto max-w-xl ltr:sm:text-left rtl:sm:text-right space-y-8">
          <h2 className="section-title">Our Mission</h2>

          <p className="font-light text-gray-500">
            We started Sleepstiq with 1 simple goal: to be your best friend at bedtime.
            We, just like you, deal with stress, unease, and trouble sleeping from a
            number of silly things like school, work, screens, numbers, and people. That's
            why we created products that aim to -
          </p>

          <div className="space-y-0 font-extralight text-sm">
            <p>✓ Promote Calm</p>
            <p>✓ Support Sleep</p>
            <p>✓ Reduce Stress</p>
            <p>✓ Aid Relaxation</p>
          </div>
        </div>
      </div>

      <img
        alt=""
        src={MissionImage}
        className="h-full w-full object-cover  sm:self-end"
      />
    </section>
  );
};
