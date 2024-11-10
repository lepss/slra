import GoogleMapComponent from "@/components/ui/GoogleMapComponent";
import clsx from "clsx";
import { Bike, BusFront, SquareM, SquareParking } from "lucide-react";

export const VenueSection = ({ className }: { className?: string }) => {
  return (
    <section className={clsx("bg-green py-10", className)} id="venue-section">
      <div className="container flex flex-col md:flex-row justify-between p-8">
        {/* Information Section */}
        <div className="w-full md:w-1/2 lg:w-1/3 p-6 flex flex-col">
          <h2 className="text-4xl font-bold mb-6 text-secondary">
            How to Get Here
          </h2>

          <div className="flex items-start mb-4">
            <SquareM className="text-orange mr-3" />
            <div className="text-secondary">
              <p className="font-semibold">Metro:</p>
              <p>Line 7, Jussieu</p>
              <p>Line 10, Cardinal Lemoine</p>
            </div>
          </div>

          <div className="flex items-start mb-4">
            <BusFront className="text-orange mr-3" />
            <div className="text-secondary">
              <p className="font-semibold">Bus:</p>
              <p>Lines 63, 67, 86, 87, 89</p>
            </div>
          </div>

          <div className="flex items-start mb-4">
            <Bike className="text-orange mr-3" />
            <div className="text-secondary">
              <p className="font-semibold">Bike Stations:</p>
              <p>Stations No. 5020, No. 5019, No. 502</p>
            </div>
          </div>

          <div className="flex items-start mb-10">
            <SquareParking className="text-orange mr-3" />
            <div className="text-secondary">
              <p className="font-semibold">Parking:</p>
              <p>1 Rue des Fossés Saint-Bernard, 75005 Paris</p>
            </div>
          </div>
          <div className="w-full py-2">
            <a
              href="https://www.imarabe.org/fr/informations-pratiques/acces?_gl=1*l5c1a9*_up*MQ..*_ga*NjEzMTA5MjU1LjE3MzAyODk0ODA.*_ga_8SQYJBHGHK*MTczMDI4OTQ4MC4xLjAuMTczMDI4OTQ4MC4wLjAuMA.."
              target="_blank"
              className="px-4 py-2 w-full border border-orange text-secondary font-semibold rounded"
            >
              More Information
            </a>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full md:w-1/2 lg:w-2/3 flex-1 mt-8 md:mt-0 md:ml-8 flex">
          <div className="w-full h-[300px] md:h-auto">
            <GoogleMapComponent />
          </div>
        </div>
      </div>
    </section>
  );
};
