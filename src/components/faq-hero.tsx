import { Search } from "lucide-react";
import { useState } from "react";

export const FAQHeroSection = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInput(value);
  };

  return (
    <section className="relative w-full h-[calc(100vh-16rem)] bg-[#FBF9F2]">
      {/* Hero Content */}
      <div className="relative z-10 container px-4 py-16 max-w-screen-xl mx-auto h-full mt-12 space-y-6">
        {/* Hero Title and Subtitle */}
        <span>We're here to help you</span>
        <h1 className="text-5xl font-bold text-gray-800 mb-4">How can we assist?</h1>
        <div className="relative w-[560px]">
          <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-6">
            <Search className="size-6 text-gray-700" />
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full ps-14 p-2.5 h-16 placeholder:text-lg"
            placeholder="Search FAQs here..."
            value={searchInput}
            onChange={handleSearchInputChange}
            required
          />
        </div>
      </div>
    </section>
  );
};
