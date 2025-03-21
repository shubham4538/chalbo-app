import React from "react";

function Service() {
  const ourServices = [
    {
      title: "Local Taxi Rentals",
      description:
        "Explore your city with ease. Our local taxi rentals provide quick and affordable transportation for all your nearby destinations.",
      image: "./taxi-rental.jpg",
    },
    {
      title: "Outstation Car Rentals",
      description:
        "Our outstation car rentals offer comfortable and convenient journeys to various destinations, ensuring memorable trips.",
      image: "./outstation-car-rentals.jpg",
    },
    {
      title: "Personal Driver",
      description:
        "Your personal chauffeur, just a call away. Enjoy convenience and reliability with our dedicated drivers for a seamless travel experience.",
      image: "./personal-driver.jpg",
    },
    {
      title: "One Way Cabs",
      description:
        "Simplify your travel plans with one-way cabs. Efficient and cost-effective, they make single-direction journeys a breeze, perfect for your convenience.",
      image: "./one-way-cabs.jpg",
    },
    {
      title: "Corporate Car Rental",
      description:
        "Elevate your corporate transportation. Our tailored car rental services ensure professionalism, punctuality, and comfort for your business travel needs.",
      image: "./corporate-car-rental.jpg",
    },
    {
      title: "Spirutual Ride",
      description:
        "Experience the spirit of travel with our spiritual rides. Our drivers take you to sacred destinations, connecting you with your inner self.",
      image: "./spiritual-ride.jpg",
    },
  ];
  return (
    <div className="mx-auto max-w-7xl">
      <div className="p-5 px-10">
        <div className="font-bold text-4xl text-center my-8">Services</div>

        {/*  */}
        <div>
          <h2 className="text-center">Our Best Services For You</h2>
          <div className="grid grid-cols-3 gap-5">
            {ourServices.map((service) => {
              return (
                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="h-40">
                    <img
                      src={service.image}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <div className="font-bold text-xl my-2">
                      {service.title}
                    </div>
                    <span className="service-text">{service.description}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* <div className="my-4">
          <div className="mb-3">
            <h3 className="mb-3">Why To Choose Us ?</h3>
          </div>
          <ul className="service-single-list">
            <li>
              <i className="far fa-check"></i>Toll free rides
            </li>
            <li>
              <i className="far fa-check"></i>No day rent
            </li>
            <li>
              <i className="far fa-check"></i>No driver charges
            </li>
            <li>
              <i className="far fa-check"></i>No halt chargers
            </li>
            <li>
              <i className="far fa-check"></i>No night charges
            </li>
            <li>
              <i className="far fa-check"></i>Unlimited miles
            </li>
            <li>
              <i className="far fa-check"></i>Credit points for discount
            </li>
            <li>
              <i className="far fa-check"></i>24/7 support
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}

export default Service;
