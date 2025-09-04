import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
import PropertyDetail from "@/components/property/PropertyDetail";

const PropertyDetailPage: React.FC = () => {
   const router = useRouter();
   const { id } = router.query;
  const [property, setProperties] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProperty = async () => {
        if(!id) return;
        try {
            const response = await axios.get(`/api/properties/${id}`);
            setProperties(response.data);
            setLoading(false);

        } catch (error) {

            console.error("Error fetching property:", error);

        } finally {
            setLoading(false);
        }
    }

    fetchProperty();
  }, [id]);

  if (loading) {

    return <p>Loading...</p>
  }

  if(!property) {
    return <p>Property not found</p>
  }

    return (
        <PropertyDetail property={property} />
    )
}

export default PropertyDetailPage;