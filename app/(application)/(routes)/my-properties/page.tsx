import Link from "next/link";
import { PropertyCard } from "./_components/property-card";
import { getUserProperties } from "@/server/property";
import { Property } from "@/types/property";

async function getProperties() {
  const response = await getUserProperties();
  return response?.data;
}

export default async function MyPropertiesPage() {

  const properties = await getProperties();

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">My Properties</h1>
        <Link href="/add-new-property" className="text-primary text-sm font-medium">Add New Property</Link>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
        {properties?.map((property: Property) => (
          <PropertyCard key={property?._id} property={property} />
        ))}
      </div>
    </div>
  );
}