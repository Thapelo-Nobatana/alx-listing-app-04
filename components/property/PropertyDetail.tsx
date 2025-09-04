

const PropertyDetail: React.FC<{property: any}> = ({property}) => {
   return (
      <div>
         <h2>{property.name}</h2>
         <p>{property.description}</p>
         <p>Price: ${property.price}</p>
         <p>Location: {property.location}</p>
      </div>
   )
};

export default PropertyDetail;