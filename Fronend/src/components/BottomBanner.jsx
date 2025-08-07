import React from 'react';
import bottom_banner from '../assets/bottom_banner.png'; // your actual image
import { features } from '../assets/assets'; // array with icon, title, description

const BottomBanner = () => {
  return (
    <div className="w-full px-4 md:px-12 lg:px-20 mt-20">
      <div className="flex flex-col md:flex-row items-center md:items-stretch bg-white rounded-xl shadow-lg overflow-hidden">

        {/* Left Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={bottom_banner}
            alt="bottom_banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Features Section */}
        <div className="w-full md:w-1/2 bg-white px-6 py-10 md:px-10 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-green-600 mb-6 text-center md:text-left">
            Why We Are the Best?
          </h2>

          <div className="space-y-5">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <div className="bg-green-100 p-3 rounded-full text-green-600">
                    <Icon className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default BottomBanner;
