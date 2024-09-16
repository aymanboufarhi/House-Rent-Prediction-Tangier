import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const features = [
  {
    icon: "👥",
    title: "Transparency",
    description:
      "You have access to all the information relating to your accommodation, such as the number of reservations, guest reviews, prices charged, etc.",
  },
  {
    icon: "💰",
    title: "Income paid directly into your account",
    description:
      "You receive your earnings directly into your bank account, without intermediaries or hidden fees. We only take a commission on the amount of each booking.",
  },
  {
    icon: "🔍",
    title: "Field experience",
    description:
      "Experts in Airbnb concierge services, we advise and support you in your short-term rental project, with in-depth knowledge of the local market and travelers' expectations.",
  },
  {
    icon: "✅",
    title: "Selection of travelers according to your criteria",
    description:
      "We filter booking requests to only retain travelers who meet your criteria, ensuring reliable and respectful occupants of your accommodation.",
  },
  {
    icon: "🛡️",
    title: "Dispute management in the event of damages",
    description:
      "We manage disputes for traveler damages: verifications, photos, reports, reimbursement via host insurance and file monitoring.",
  },
  {
    icon: "📊",
    title: "Commission system",
    description: "Win/Win: No rent, no fees. That's the principle of success.",
  },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === features.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? features.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    let intervalId;
    if (autoplay) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [currentIndex, autoplay]);

  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-12">
          Why use <span className="text-orange-500">Mydayf</span> services?
        </h2>
        <div 
          className="relative" 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {features.map((feature, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg shadow-lg p-8 h-full flex flex-col items-center justify-center text-center">
                    <div className="text-5xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <div className="flex justify-center mt-8">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 focus:outline-none ${
                index === currentIndex ? "bg-orange-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;