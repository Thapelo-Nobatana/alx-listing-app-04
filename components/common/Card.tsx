import React from "react";
import { PropertyProps } from "@/interfaces";

const Card: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden ">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-48 object-cover "
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-black">{property.name}</h2>
        <div className="flex">

          { property.category.map((category, index)=> {
            return (
              <p className="flex flex-row gap-5 text-black" key={index}> {category + " "} , </p>
            )
          })}
        </div>
        <p className="text-sm text-black ">
          {property.address.city}, {property.address.country}
        </p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-blue-600 font-semibold">${property.price}</span>
          <span className="text-yellow-500 font-medium">⭐ {property.rating}</span>
        </div>
        {property.discount && (
          <p className="mt-1 text-sm text-red-500 font-semibold">
            {property.discount}% OFF
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;