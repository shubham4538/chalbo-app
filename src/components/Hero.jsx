import React, { useState } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const [vehicleType, setVehicleType] = useState("Car");
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Header */}
      <div className="p-2 md:p-4 lg:p-5 bg-cyan-100">
        <div className="mx-auto max-w-7xl">
          <div className="w-3/5 md:w-2/5 myfont">
            <h1 className="text-3xl lg:text-4xl xl:text-6xl font-bold lg:tracking-tight xl:tracking-tighter">
              Cab bookings done easier with Chalbo
            </h1>
            <p className="text-lg mt-3 text-slate-700 max-w-xl">
              Get a Cab whenever and wherever you need from your device.
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="mx-auto max-w-7xl p-5 my-10">
        <div
          className="relative z-10 p-5 rounded-md bg-white"
          style={{ boxShadow: "2px 2px 8px -3px black" }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="flex flex-col">
              <label className="text-gray-700 mb-2">Pick Location</label>
              <input
                type="text"
                placeholder="Enter pick-up location"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 mb-2">Drop Location</label>
              <input
                type="text"
                placeholder="Enter drop-off location"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 mb-2">Pick Time</label>
              <input
                type="datetime-local"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 mb-2">Drop Time</label>
              <input
                type="datetime-local"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
        </div>
      </div>

      <img src="./bmw.png" className="absolute left-1/2 top-[10%]" />
    </main>
  );
}

export default Hero;
