import React, { useState } from "react";
import { Link } from "react-router-dom";

const menuitems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About Us",
    path: "/about",
  },
  {
    title: "Service",
    path: "/service",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#38b6ff]">
      <div className="max-w-7xl m-auto">
        <header className="myfont flex flex-col lg:flex-row justify-between items-center p-3 px-5">
          <div className="flex w-full lg:w-auto items-center justify-between">
            <a href="/" className="text-lg">
              <img src="./logo.png" alt="" className="h-10" />
            </a>
            <div
              className="block lg:hidden cursor-pointer"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <i className="fas fa-bars text-xl text-gray-800"></i>
            </div>
          </div>
          <div
            className={`${
              !isOpen && "hidden"
            } w-full lg:w-auto mt-2 lg:flex lg:mt-0 text-center`}
          >
            <div className="flex flex-col lg:flex-row lg:gap-3">
              {menuitems.map((item, index) => (
                <div key={item.title} className="text-center">
                  <a
                    href={item.path}
                    className="lg:px-3 py-2 text-md font-semibold text-gray-900 hover:text-gray-700"
                  >
                    <span>{item.title}</span>
                  </a>
                </div>
              ))}
            </div>
            <div className="p-1 px-2 lg:hidden block mt-3 rounded-md text-white bg-zinc-900">
              <Link href="" size="md">
                Start Ride
              </Link>
            </div>
          </div>
          <div>
            <div className="p-2 px-3 hidden lg:block rounded-md text-sm text-white bg-zinc-900">
              <Link href="">Start a Ride</Link>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Navbar;
