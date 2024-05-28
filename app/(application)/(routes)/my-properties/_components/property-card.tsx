import { Property } from "@/types/property"

type PropertyCardProps = {
  property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="group relative">
      <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
        <img src={"/placeholder.jpg"} alt={property.place} className="object-cover object-center" />
        {/* <div className="flex items-end p-4 opacity-0 group-hover:opacity-100" aria-hidden="true">
          <div className="w-full rounded-md bg-primary bg-opacity-75 px-4 py-2 text-center text-sm font-medium text-primary-foreground backdrop-blur backdrop-filter">
            View Property
          </div>
        </div> */}
      </div>
      <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900">
        <h3>
          <a href="#">
            <span aria-hidden="true" className="absolute inset-0" />
            {property.place}
          </a>
        </h3>
        <p>{property.bedroom} Bedroom</p>
      </div>
      <p className="mt-1 text-sm text-gray-500">{property.area} sqft</p>
    </div>
  )
}