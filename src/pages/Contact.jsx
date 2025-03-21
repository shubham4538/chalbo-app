import React from "react";

function Contact() {
  const contacts = [
    {
      title: "Office Address",
      details: "24, Adam Street, Mumbai, India",
      icon: "fas fa-location-dot",
    },
    {
      title: "Phone",
      details: "+919238021380",
      icon: "fas fa-phone",
    },
    {
      title: "Email",
      details: "chalbo@cab.com",
      icon: "fas fa-envelope",
    },
    {
      title: "Timings",
      details: "9AM - 6PM",
      icon: "fas fa-timer",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl">
      <div className="p-5 px-10">
        <div className="font-bold text-4xl text-center my-8">Contact</div>

        {/*  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {contacts.map((contact) => (
            <div
              key={contact.title}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              <div>
                <i className={`${contact.icon} text-3xl`}></i>
                <div>{contact.title}</div>
              </div>
              <p className="text-gray-700 italic">{contact.details}</p>
            </div>
          ))}
        </div>

        {/*  */}
        <div className="p-10 mt-10 shadow-xl rounded-lg">
          <div className="font-semibold text-2xl text-center mb-5">
            Get in Touch
          </div>
          <div className="flex flex-col md:flex-row">
            <img
              src="./contact.jpg"
              className="w-full md:w-1/2 object-contain"
            />
            <form className="h-max grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label>First Name</label>
                <input
                  type="text"
                  className="p-2 px-3 rounded-md border border-gray-300"
                  placeholder="Bonnie"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label>Last Name</label>
                <input
                  type="text"
                  className="p-2 px-3 rounded-md border border-gray-300"
                  placeholder="Green"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label>Your email</label>
                <input
                  type="email"
                  className="p-2 px-3 rounded-md border border-gray-300"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label>Phone Number</label>
                <input
                  type="number"
                  className="p-2 px-3 rounded-md border border-gray-300"
                  placeholder="+12 345 6789"
                  required
                />
              </div>
              <div className="col-span-2 flex flex-col">
                <label>Your message</label>
                <textarea
                  rows="6"
                  className="p-2 px-3 rounded-md border border-gray-300"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-max p-2 px-4 rounded-md text-white bg-cyan-500"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
