import React, { useState } from 'react';

const testimonials = [
  {
    name: 'Alice',
    title: 'Student at Finance',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    image: 'img/test (1).jpeg',
  },
  {
    name: 'John',
    title: 'Software Engineer',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque pariatur autem sint ipsum assumenda perspiciatis cumque cum. Delectus, tempore laborum.',
    image: 'img/test (2).jpeg',
  },
  {
    name: 'Monica',
    title: 'Graphic Designer',
    text: 'Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90',
    image: 'img/test (3).jpeg',
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">What our users say about us</h2>
      <div className="flex justify-center mb-4">
        {testimonials.map((testimonial, index) => (
          <img
            key={index}
            src={testimonial.image}
            alt={testimonial.name}
            className={`w-16 h-16 rounded-full object-cover mx-2 cursor-pointer ${index === current ? 'border-2 border-blue-500' : ''}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
      <div className="text-center">
        <h3 className="text-xl font-semibold">{testimonials[current].name}</h3>
        <p className="text-sm text-gray-600">{testimonials[current].title}</p>
        <p className="mt-2">{testimonials[current].text}</p>
      </div>
    </div>
  );
};

export default TestimonialSlider;
