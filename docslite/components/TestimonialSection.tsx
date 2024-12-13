import React from 'react';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  message: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Product Manager',
    message: 'DocsLite has made collaborating on documents so much easier and faster for our team. Highly recommended!',
    avatar: './assets/images/avatar1.png',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Software Engineer',
    message: 'Real-time collaboration with DocsLite is seamless. It has really boosted our productivity!',
    avatar: './assets/images/avatar2.png',
  },
  {
    id: 3,
    name: 'Alex Brown',
    role: 'UX Designer',
    message: 'I love how easy it is to manage and share my documents. The interface is intuitive and user-friendly.',
    avatar: './assets/images/avatar3.png',
  },
  {
    id: 4,
    name: 'Mary Johnson',
    role: 'Marketing Specialist',
    message: 'DocsLite has transformed our workflow and helped our team collaborate without any issues.',
    avatar: './assets/images/avatar4.png',
  },
  {
    id: 5,
    name: 'David Lee',
    role: 'CEO',
    message: 'The platform is simple to use and has made document collaboration an absolute breeze!',
    avatar: './assets/images/avatar5.png',
  },
];

const TestimonialSection = () => {
  return (
    <section className="overflow-hidden">
      <h2 className="text-2xl md:text-4xl font-semibold text-center mb-20 text-blue-100">What Our Users Say</h2>
      
      <div className="overflow-hidden">
        <div className="flex animate-scroll">
          <div className="flex gap-8 p-4">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="max-w-xs bg-dark-300/70 p-6 rounded-lg shadow-lg">
                <div>
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full mb-4 mx-auto" />
                  <div>
                    <h3 className="text-lg font-semibold text-center text-blue-600">{testimonial.name}</h3>
                    <p className="text-sm text-center mb-4">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-md">{testimonial.message}</p>
              </div>
            ))}
          </div>
        </div>

  <div className="flex animate-scroll-reverse">
    {/* Bottom Row (Right-moving) */}
    {testimonials.map((testimonial) => (
      <div key={testimonial.id} className="max-w-xs bg-white p-6 rounded-lg shadow-lg">
        <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full mb-4 mx-auto" />
        <h3 className="text-lg font-semibold text-center text-blue-600">{testimonial.name}</h3>
        <p className="text-sm text-center text-gray-600 mb-4">{testimonial.role}</p>
        <p className="text-md text-gray-800">{testimonial.message}</p>
      </div>
    ))}
  </div>
</div>

    </section>
  );
};

export default TestimonialSection;
