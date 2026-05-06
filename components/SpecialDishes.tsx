"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const dishes = [
  {
    id: 1,
    title: "Smoked Pork Bamboo",
    description: "Traditional Northeast Indian specialty with bamboo shoot",
    price: "450.00",
    rating: "5.0",
    image: "/northeast_indian_dish_smoked_pork_1778047364761.png",
  },
  {
    id: 2,
    title: "Fattouch salad",
    description: "Fresh Mediterranean salad with crispy bread",
    price: "249.00",
    rating: "4.9",
    image: "/fattouch_salad_1778045907548.png",
  },
  {
    id: 3,
    title: "Vegetable salad",
    description: "Classic garden fresh vegetable mix",
    price: "299.00",
    rating: "4.6",
    image: "/vegetable_salad_1778045922147.png",
  },
  {
    id: 4,
    title: "Egg vegi salad",
    description: "Nutritious egg and green vegetable bowl",
    price: "199.00",
    rating: "4.5",
    image: "/egg_vegi_salad_1778045943657.png",
  },
];

export default function SpecialDishes() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Duplicate dishes for a longer loop experience
  const carouselItems = [...dishes, ...dishes, ...dishes];

  // Handle responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = carouselItems.length - itemsPerView;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, maxIndex]); 

  // Exact CSS math to show exactly 'itemsPerView' cards with a 2rem (32px) gap
  const gap = 2; // in rem
  const cardWidth = `calc((100% - ${(itemsPerView - 1) * gap}rem) / ${itemsPerView})`;
  const translateX = `calc(-${currentIndex} * (${cardWidth} + ${gap}rem))`;

  return (
    <section id="offers" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-secondary font-bold uppercase tracking-[0.2em] text-sm mb-4">
              Special Dishes
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-black max-w-md leading-tight tracking-tight">
              Standout Dishes <br /> From Our Menu
            </h2>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              className="w-14 h-14 rounded-full bg-zinc-100 flex items-center justify-center text-2xl hover:bg-primary hover:text-white transition-colors active:scale-95 shadow-sm"
            >
              <FiChevronLeft />
            </button>
            <button 
              onClick={nextSlide}
              className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-2xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30 active:scale-95"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>

        {/* Carousel Container (Strictly bounds the cards) */}
        <div className="w-full overflow-hidden pb-8">
          <motion.div 
            className="flex"
            style={{ gap: `${gap}rem` }}
            animate={{ x: translateX }}
            transition={{ type: "spring", stiffness: 250, damping: 30 }}
          >
            {carouselItems.map((dish, index) => (
              <div
                key={`${dish.id}-${index}`}
                className="flex-shrink-0"
                style={{ width: cardWidth }}
              >
                <motion.div 
                  className="bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 relative group flex flex-col h-full overflow-hidden border border-zinc-100"
                >
                  {/* Image Container */}
                  <div className="relative w-full aspect-[4/3] bg-zinc-50 flex items-center justify-center group-hover:bg-green-50/50 transition-colors">
                    <Image
                      src={dish.image}
                      alt={dish.title}
                      fill
                      className="object-contain p-4  scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content Container */}
                  <div className="p-8 flex-1 flex flex-col justify-between bg-white">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-zinc-900 mb-2 group-hover:text-primary transition-colors line-clamp-1">
                        {dish.title}
                      </h3>
                      <p className="text-zinc-500 text-sm line-clamp-2">
                        {dish.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <p className="text-2xl font-black text-zinc-900 flex items-center">
                        <span className="text-secondary text-sm mr-1 mt-1">₹</span>
                        {dish.price}
                      </p>
                      <div className="flex items-center gap-1.5 bg-zinc-50 px-3 py-1.5 rounded-full border border-zinc-100">
                        <AiFillStar className="text-yellow-400 text-lg" />
                        <span className="font-bold text-zinc-700 text-sm">{dish.rating}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
