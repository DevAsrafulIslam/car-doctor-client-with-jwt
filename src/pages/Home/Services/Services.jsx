import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import ServiceShidule from "./ServiceShidule";

const Services = () => {
  const [services, setServices] = useState([]);
  console.log(services);

  useEffect(() => {
    fetch("https://car-doctor-server-with-jwt-orpin.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  });

  return (
    <div className="mt-4 ">
      <div className="text-center">
        <h3 className=" text-3xl text-[#FF3811]">Our Service</h3>
        <h2 className="text-5xl">Our Service Area </h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.length > 0 &&
            services.map((service) => (
              <ServiceCard key={service._id} service={service}></ServiceCard>
            ))}
        </div>

        <button className="btn text-white mt-14 btn-outline bg-[#FF3811] mr-5">
          More Services
        </button>
        <ServiceShidule></ServiceShidule>
      </div>
    </div>
  );
};

export default Services;
