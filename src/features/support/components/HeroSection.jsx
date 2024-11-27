import React from "react";

const HeroSection = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-emerald-100 py-16">
        <div className="container text-center">
          <h1 className="mb-8 text-4xl font-bold">How can we help?</h1>
          <div className="mx-auto max-w-xl">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                className="h-12 pl-10"
                placeholder="Search for help..."
                type="search"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
