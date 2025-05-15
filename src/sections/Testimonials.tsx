import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  text: string;
}

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO',
      company: 'TechStart Inc.',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
      text: 'Working with Jane was an absolute pleasure. She brought our vision to life with her exceptional design skills and technical expertise. Our website now stands out from the competition and has significantly improved our user engagement.',
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Product Manager',
      company: 'InnovateLab',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
      text: 'Jane delivered beyond our expectations. Her attention to detail and ability to translate complex ideas into intuitive designs made our product launch a tremendous success. I highly recommend her services to anyone looking for quality and professionalism.',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Marketing Director',
      company: 'Brandify',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      text: 'Our e-commerce platform needed a complete overhaul, and Jane delivered exceptional results. Her understanding of user experience and modern design principles transformed our online presence. Sales have increased by 40% since the redesign!',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Client <span className="text-primary-600 dark:text-primary-400">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about working with me.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="md:w-1/4 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary-100 dark:border-primary-900 mb-4">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonials[currentIndex].position}
                  </p>
                  <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
              
              <div className="md:w-3/4">
                <Quote className="text-primary-200 dark:text-primary-800 mb-4" size={42} />
                <p className="text-gray-700 dark:text-gray-300 text-lg italic mb-4">
                  {testimonials[currentIndex].text}
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex
                      ? 'bg-primary-600 dark:bg-primary-400'
                      : 'bg-gray-300 dark:bg-gray-700'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>

          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 p-2 rounded-full bg-white dark:bg-gray-800 shadow-md text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 p-2 rounded-full bg-white dark:bg-gray-800 shadow-md text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;