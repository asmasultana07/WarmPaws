import { Star } from "lucide-react";
import React, { useEffect, useState } from "react";

const PopularSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./petData.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(services);

  return (
    <div className="mt-8 px-10 md:px-30">
      <div>
        <h3 className="font-bold text-3xl text-center">
          Popular Winter Care Services
        </h3>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
        {services.map((service) => (
        <div>
          <div className="card bg-base-100 w-96 shadow-md">
            <figure>
              <img className="w-full h-[300px] object-cover"
                src={service?.image}
                alt="pets"
                
              />
              
            </figure>
            <div className="card-body">
              <h2 className="card-title text-blue-800 text-xl">{service?.serviceName}</h2>
              <div className="flex justify-between items-center mb-3">
                <p className="flex justify-start items-center font-semibold text-blue-800">Price: ${service?.price}</p>
                <p className="flex justify-end items-center font-bold text-orange-500"><span className="mr-2"><Star size={16} color="#FF5F1F"/></span> {service?.rating}</p>
              
              </div>
              <div className="card-actions justify-end">
                <button className="btn text-white hover:text-blue-800 font-bold bg-linear-to-r from-[#2e52e3] to-[#065265] hover:from-blue-300 hover:to-purple-300">View Details</button>
              </div>
            </div>
          </div>
        </div>
      ))}

      
      </div>
    </div>
  );
};

export default PopularSection;
