import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    title: "Ayat 58 (Quran)",
    content: "….so whenever guidance comes to you from Me, then whoever follows my guidance, then there will neither be any fear on them nor will they grieve."
  },
  {
    id: 2,
    title: "Ayat 286 (Quran)",
    content: "Allah does not burden a soul beyond that it can bear..."
  },
  {
    id: 3,
    title: "Ayat 155 (Quran)",
    content: "And We will surely test you with something of fear and hunger and a loss of wealth and lives and fruits, but give good tidings to the patient."
  }
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center gap-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          
          <div className="w-1/2 text-center">
            <h3 className="heading font-semibold text-3xl mb-4">{slides[currentSlide].title}</h3>
            <p className="mb-0 text-2xl">{slides[currentSlide].content}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="grid grid-cols-3 w-[30%] gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-full h-1 rounded-full ${
              index === currentSlide ? 'bg-[#DB9E30]' : 'bg-slate-300'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;