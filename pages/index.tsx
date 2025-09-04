import React from "react";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PLACEHOLDER_IMAGE } from "@/constants";
import { PropertyProps } from "@/interfaces";
import Pill from "@/components/common/Pill";
import Card from "@/components/common/Card";


const filters = ["Top Villa", "Self Checkin", "Beachfront", "Pet Friendly", "Mountain View"];

const HomePage: React.FC = () => {
  return (
    <div className="px-4 md:px-12">
      {/* Hero Section */}
      <section
        className="relative h-[481px] w-[100%] rounded-xl overflow-hidden bg-cover bg-center flex items-center justify-center text-[#F3FOFO] text-center"
        style={{
          backgroundImage: `url(${PLACEHOLDER_IMAGE})`,
        }}
      >
        {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
        <div className="z-10">
          <h1 className="text-4xl font-semibold text-white-600 ">Find your favorite place here!</h1>
          <p className="text-xl mt-3">The best prices for over 2 million properties worldwide.</p>
        </div>
      </section>

      {/* Filter Pills */}
      <section className="mt-8 flex flex-wrap gap-2">
        {filters.map((filter) => (
         
         <Pill key={filter}  label={filter}/>
          
        ))}
      </section>

      {/* Property Listings */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-20">
        {
          PROPERTYLISTINGSAMPLE.map((property: PropertyProps ) => (
            <Card key={property.name} property={property} />
          ))
        }
      </section>
    </div>
  );
};

export default HomePage;