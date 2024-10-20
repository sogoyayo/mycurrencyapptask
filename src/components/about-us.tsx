import { Button } from "./ui/button";

export const AboutUs = () => {
  return (
    <section className="py-8">
      <div className="max-w-screen-xl mx-auto space-y-12 text-center my-28">
        <h2 className="section-title">About Us</h2>
        <p className="paragraph-text max-w-[85ch] mx-auto">
          Welcome to Sleepstiq – Your Partner in Restful Sleep At Sleepstiq, we believe
          that everyone deserves quality sleep. Our mission is to help people achieve
          better sleep through science-backed solutions that prioritize wellness and rest.
          Whether you're struggling with insomnia, shift work fatigue, or just need a
          better night’s sleep, we’ve got you covered.
        </p>
        <Button className="px-16 py-6">Visit Shop</Button>
      </div>
    </section>
  );
};
