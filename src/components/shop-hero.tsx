import ShopHeroImg from "@/assets/images/shop-hero.jpg";

export const ShopHeroSection = () => {
  return (
    <section className="relative w-full h-[calc(100vh-16rem)] bg-gray-100">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={ShopHeroImg}
          alt="Woman sleeping peacefully"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-white/30"></div>

      {/* Hero Content */}
      <div className="relative z-10 container px-4 py-16 max-w-screen-xl mx-auto h-full mt-12 space-y-6">
        {/* Hero Title and Subtitle */}
        <span>We're here to help you</span>
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Relax & Rest</h1>
      </div>
    </section>
  );
};
