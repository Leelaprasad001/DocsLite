import React from 'react';

type Testimonial = {
  name: string;
  role: string;
  message: string;
  avatar: string;
};

const items: Testimonial[] = [
  {
    name: 'John Doe',
    role: 'Product Manager',
    message: 'DocsLite has made collaborating on documents so much easier and faster for our team. Highly recommended!',
    avatar: './assets/images/avatar1.png',
  },
  {
    name: 'Jane Smith',
    role: 'Software Engineer',
    message: 'Real-time collaboration with DocsLite is seamless. It has really boosted our productivity!',
    avatar: './assets/images/avatar2.png',
  },
  {
    name: 'Alex Brown',
    role: 'UX Designer',
    message: 'I love how easy it is to manage and share my documents. The interface is intuitive and user-friendly.',
    avatar: './assets/images/avatar3.png',
  },
  {
    name: 'Mary Johnson',
    role: 'Marketing Specialist',
    message: 'DocsLite has transformed our workflow and helped our team collaborate without any issues.',
    avatar: './assets/images/avatar4.png',
  },
  {
    name: 'David Lee',
    role: 'CEO',
    message: 'The platform is simple to use and has made document collaboration an absolute breeze!',
    avatar: './assets/images/avatar5.png',
  },
];

const TestimonialSection = () => {
  const testimonials = [...items, ...items];
  return (
    <section className="overflow-hidden mt-10 md:mt-0">
      <h2 className="text-xl md:text-4xl font-semibold text-center mb-5 md:mb-10 text-blue-100">What Our Users Say</h2>
      <div className="overflow-hidden">
        {/* Left to right scrolling */}
        <div className="flex animate-scroll">
          <div className="flex gap-8 p-2">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-dark-300/70 p-4 rounded-lg shadow-lg w-80 h-45 hover:scale-105 transform transition-all cursor-pointer"
              >
                <div className="flex items-center mb-5">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-dark-400 p-2 rounded-full flex items-center justify-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col items-start ml-5">
                    <h3 className="text-md md:text-lg font-semibold text-left text-blue-100">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs md:text-sm text-left">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-sm md:text-md">{testimonial.message}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right to left scrolling */}
        <div className="flex animate-scroll-reverse">
          <div className="flex gap-8 p-2">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-dark-300/70 p-4 rounded-lg shadow-lg w-80 h-45 hover:scale-105 transform transition-all"
              >
                <div className="flex items-center mb-5">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-dark-400 p-2 rounded-full flex items-center justify-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col items-start ml-5">
                    <h3 className="text-md md:text-lg font-semibold text-left text-blue-100">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs md:text-sm text-left">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-sm md:text-md">{testimonial.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
