import React from "react";

const CompanyStorySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Eventify started with a simple idea: event planning should be easy and inspiring. 
            We connect people with unforgettable experiences, from corporate summits to weddings.
          </p>
          <p className="text-gray-600">
            Since our launch, we've grown into a trusted platform for thousands of users across the country.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/images/about-story.jpg"
            alt="Our Story"
            className="rounded-2xl shadow-xl w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CompanyStorySection;
