"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { FiX } from "react-icons/fi";

export default function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center md:text-left z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Dive into Delights <br />
            Of Delectable <span className="text-primary text-glow">Food</span>
          </h1>
          <p className="text-accent text-lg md:text-xl mb-10 max-w-lg mx-auto md:mx-0">
            Where Each Plate Weaves a Story of Culinary{" "}
            <br className="hidden md:block" />
            Mastery and Passionate Craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
            <Link 
              href="#menu"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-primary/30"
            >
              Our Menu
            </Link>
            <button 
              onClick={() => setIsVideoModalOpen(true)}
              className="flex items-center gap-4 text-accent font-semibold group"
            >
              <span className="w-12 h-12 flex items-center justify-center bg-white rounded-md shadow-lg transition-transform group-hover:scale-110">
                <FaPlay className="text-primary ml-1" />
              </span>
              Watch Video
            </button>
          </div>
        </motion.div>

        {/* Video Modal */}
        <AnimatePresence>
          {isVideoModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsVideoModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative w-full max-w-4xl aspect-video bg-black rounded-md overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setIsVideoModalOpen(false)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/40 text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <FiX className="text-2xl" />
                </button>
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/xPPLbEFbCAo?autoplay=1"
                  title="Restaurant Promo Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Right Content - Hero Image & Floating Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative"
        >
          {/* Main Image with Green Background Circle */}
          <div className="relative w-full max-w-[500px] aspect-square mx-auto">
            {/* <div className="absolute inset-0 bg-primary rounded-full scale-95 opacity-90 blur-3xl -z-10" />
            <div className="absolute inset-0 bg-primary/20 rounded-full scale-105 -z-20" /> */}

            <Image
              src="/hero-girl.png"
              alt="Delicious Food"
              width={600}
              height={600}
              className="object-contain drop-shadow-2xl"
              priority
            />

            {/* Floating Card 1: Spicy Noodles */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -left-4 bottom-10 bg-white p-3 rounded-md shadow-2xl flex items-center gap-4 max-w-[200px]"
            >
              <div className="w-16 h-16 relative rounded-xl overflow-hidden bg-orange-100">
                <Image
                  src="/spicy_noodles_card_1778046439252.png"
                  alt="Noodles"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-sm">Spicy noodles</h4>
                <div className="flex text-yellow-400 text-[10px]">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <span className="text-gray-300">
                    <AiFillStar />
                    <AiFillStar />
                  </span>
                </div>
                <p className="font-bold text-red-500 text-sm">₹ 249.00</p>
              </div>
            </motion.div>

            {/* Floating Card 2: Vegetarian Salad */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -right-4 bottom-32 bg-white p-3 rounded-2xl shadow-2xl flex items-center gap-4 max-w-[200px]"
            >
              <div className="w-16 h-16 relative rounded-xl overflow-hidden bg-green-100">
                <Image
                  src="/vegetarian_salad_card_1778046454857.png"
                  alt="Salad"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-sm">Vegetarian salad</h4>
                <div className="flex text-yellow-400 text-[10px]">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <span className="text-gray-300">
                    <AiFillStar />
                  </span>
                </div>
                <p className="font-bold text-red-500 text-sm">₹ 199.00</p>
              </div>
            </motion.div>

            {/* Hot Spicy Food Badge */}
            <div className="absolute top-10 right-0 bg-white py-2 px-4 rounded-full shadow-lg flex items-center gap-2 border border-red-50">
              <span className="text-red-500 text-xs font-bold uppercase tracking-wider">
                Hot spicy food
              </span>
              <span className="text-lg">🌶️</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
