import React from "react";

function About() {
  const counter = [
    {
      title: "Available Taxi",
      value: 210,
      icon: "fas fa-car",
    },
    {
      title: "Happy Clients",
      value: 9050,
      icon: "fas fa-users",
    },
    {
      title: "Our Drivers",
      value: 340,
      icon: "fas fa-user",
    },
    {
      title: "Positive Reviews",
      value: 6200,
      icon: "fas fa-star",
    },
  ];

  const testimonials = [
    {
      name: "Alice Johnson",
      text: "Amazing service! Highly recommended.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX4q0-hFsRa8s1kzziYZVHIW1zg-yH0S2POA&s",
    },
    {
      name: "Michael Smith",
      text: "Super easy to book a ride. Will use again!",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX4q0-hFsRa8s1kzziYZVHIW1zg-yH0S2POA&s",
    },
    {
      name: "Sophia Davis",
      text: "Great experience, the car was in perfect condition.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX4q0-hFsRa8s1kzziYZVHIW1zg-yH0S2POA&s",
    },
    {
      name: "James Brown",
      text: "Affordable and reliable. 5 stars!",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX4q0-hFsRa8s1kzziYZVHIW1zg-yH0S2POA&s",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl">
      <div className="p-5 px-10">
        <div className="font-bold text-4xl text-center my-8">About Us</div>

        {/* About */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center my-5">
          <div className="about-img">
            <img src="./bmw.png" alt="" />
          </div>
          <div className="about-right">
            <div className="site-heading mb-3">
              <h2 className="text-4xl">
                Choose Chalbo For Best Travel Experince!
              </h2>
            </div>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ornare dui et nulla suscipit, vitae interdum lectus hendrerit.
              Curabitur gravida quis ipsum quis fringilla. Vivamus quam neque,
              iaculis sed quam vitae, feugiat accumsan velit. Vivamus rutrum,
              turpis eu lobortis vulputate, ante libero aliquet neque, eget
              dignissim libero neque in risus. Maecenas sit amet dignissim erat.
              Curabitur finibus, neque a rutrum tincidunt, mi ex semper tortor,
              accumsan rutrum turpis lectus ut purus. Phasellus et egestas
              purus. Phasellus molestie posuere egestas. Sed porta, felis in
              varius scelerisque, sapien quam consectetur tortor, ut tristique
              lacus tellus eu tellus. Sed dolor elit, consequat nec scelerisque
              quis, sagittis id erat.
            </p>
          </div>
        </div>

        {/* Counter */}
        <div className="bg-img rounded-lg p-5 py-16 text-white">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {counter.map((item) => {
              return (
                <div key={item.title}>
                  <div class="flex flex-col items-center">
                    <div className="h-20 w-20 flex items-center justify-center rounded-full bg-cyan-900">
                      <i className={`${item.icon} text-5xl`}></i>
                    </div>
                    <div className="text-center">
                      <span class="text-5xl font-bold">{item.value}</span>
                      <div class="text-3xl font-semibold">{item.title}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <div className="font-bold text-4xl text-center my-8">Tesimonials</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
              >
                <div>
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mb-4"
                  />
                  <div>{testimonial.name}</div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
